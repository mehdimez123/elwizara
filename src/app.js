import express from 'express'
import cors from 'cors';
import path from 'path';
import fs from 'fs';

import FormData from 'form-data';
import axios from 'axios';
import { spawn } from 'child_process';

import { createService, getService, getAllServices , getServicesByParentId , getAllIndexes , getIndex , getIndexesByService , createIndex , getServiceByIndexId , getParentServiceById  , createDirectories} from './models/serviceModels.js';
import upload from './middlewares/uploadMiddleware.js';

const app = express();

app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json());

app.use(express.static('uploads'));

/* ELSE */


app.post('/uploaddocument', async (req, res) => {
    try {
      
      const { url, tags } = req.body;
      let data = new FormData();
      data.append('language', 'eng');
      data.append('isOverlayRequired', 'false');
      data.append('url', url);
      data.append('iscreatesearchablepdf', 'false');
      data.append('issearchablepdfhidetextlayer', 'false');
  
      let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.ocr.space/parse/image',
      headers: { 
          'apikey': 'helloworld', 
          ...data.getHeaders()
      },
      data : data
      };
  
      const response = await axios.request(config)
  
      /* Cleaning the text */
  
      const parsedResults = response.data.ParsedResults;
  
      let concatenatedText = '';
  
      parsedResults.forEach(result => {
          concatenatedText += result.ParsedText + ' ';
      });
  
      const cleanedText = concatenatedText.replace(/[\r\n]+/g, ' ') + '\n';
  
      // res.json({text :cleanedText});
  
      /* getting key words */
  
      const pythonProcess = spawn('py', ['src/pythonScripts/keywords.py']);
      
      pythonProcess.stdin.write(cleanedText);
      pythonProcess.stdin.write(JSON.stringify(tags));
  
      pythonProcess.stdin.end();
  
      pythonProcess.stdout.on('data', (data) => {
        const analysis = {
          keywords : JSON.parse(data)[0].slice(0, 5),
          tags : JSON.parse(data)[1]
        };
        console.log(analysis);
      });
      pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
  
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          res.send('Document processed successfully');
        } else {
        }
      });
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });



app.post("/createdir", async (req, res) => {
    try {
        await createDirectories();
        res.send('Folders created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});




app.get("/service", async (req, res) => {
    try {
        const services = await getAllServices();
        res.send(services);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/service/id/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const service = await getService(id);
        if (!service) {
            return res.status(404).send('Service not found');
        }
        res.send(service);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/service/parent/:parentId" , async (req, res) => {
    try {
        let parentId = req.params.parentId;
        if (parentId === "null") {
            parentId = null;
        }
        const services = await getServicesByParentId(parentId);
        res.send(services);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/service/:serviceId/index" , async (req, res) => {
    try {
        const serviceId = req.params.serviceId;
        const indexes = await getIndexesByService(serviceId);
        res.send(indexes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get("/services/parent/:serviceId" , async (req, res) => {
    try {
        const parentId = req.params.serviceId;
        const service = await getParentServiceById(serviceId);
        if (!service) {
            return res.status(404).send('Service not found');
        }
        res.send(service);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.post("/service" , async (req, res) => {
    try {
        const { name, parentId } = req.body;
        const service = await createService(name, parentId);
        res.status(201).send(service);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get("/index" , async (req, res) => {
    try {
        const indexes = await getAllIndexes();
        res.send(indexes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/index/id/:id" , async (req, res) => {
    try {
        const id = req.params.id;
        const index = await getIndex(id);
        if (!index) {
            return res.status(404).send('Index not found');
        }
        res.send(index);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


app.post("/index" , async (req, res) => {
    try {
        const { name , serviceId } = req.body;
        const index = await createIndex(name, serviceId);
        res.status(201).send(index);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/index/:indexId/service" , async (req, res) => {
    try {
        const indexId = req.params.indexId;
        const service = await getServiceByIndexId(indexId);
        if (!service) {
            return res.status(404).send('Service not found');
        }
        const parentService = await getParentServiceById(service.id);
        if (!parentService) {
            return res.status(404).send('Parent service not found');
        }
        const path = `/${parentService.name}/${service.name}`;
        res.send({ 
            path : path
         });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const chosenPath = req.body.path;
    const filePath = path.join('./uploads', chosenPath, file.originalname);
  
    // Create directories recursively if they don't exist
    const directoryPath = path.dirname(filePath);
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath, { recursive: true });
    }
  
    // Move the uploaded file to the chosen path
    fs.rename(file.path, filePath, (err) => {
        if (err) {
            console.error('Error moving file:', err);
            return res.status(500).send('Error uploading file');
        }
        res.send('File uploaded successfully');
    });
});

app.listen(8000,()=>{
    console.log("Server listening on port: 8000");
  });