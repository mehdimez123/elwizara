import multer from 'multer'
import {v4} from 'uuid'

const storage = multer.diskStorage({
    destination: './uploads'
  });

const upload = multer({ storage: storage });

export default upload