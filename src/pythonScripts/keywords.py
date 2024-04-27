#!/usr/bin/env python
# coding: utf-8

import json
import sys
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import LatentDirichletAllocation
import spacy
import numpy as np
from numpy.linalg import norm

def preprocess_text(text):
    tokens = word_tokenize(text)
    tokens = [word.lower() for word in tokens if word.isalpha()]
    tokens = [word for word in tokens if word not in stopwords.words('english')]
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    return ' '.join(tokens)

def getKeywords(doc):
    preprocessed_doc = preprocess_text(doc)
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform([preprocessed_doc])
    feature_names = tfidf_vectorizer.get_feature_names_out()
    tfidf_scores = tfidf_matrix.toarray()[0]
    keywords = [(feature_names[i], tfidf_scores[i]) for i in tfidf_scores.argsort()[::-1]]
    return keywords

document = sys.stdin.readline().strip()
tags_json = sys.stdin.readline().strip()

keywords = getKeywords(document)

# Parse JSON string of tags
tags = json.loads(tags_json)

nlp = spacy.load("en_core_web_lg")

def find_matching_tags(keywords, tags):
    tag_scores = {tag: 0 for tag in tags}
    for keyword, score in keywords:
        keyword_embedding = nlp(keyword).vector
        for tag in tags:
            tag_embedding = nlp(tag).vector
            keyword_norm = norm(keyword_embedding)
            tag_norm = norm(tag_embedding)
            if keyword_norm != 0 and tag_norm != 0:
                similarity_score = keyword_embedding.dot(tag_embedding) / (keyword_norm * tag_norm)
                tag_scores[tag] += similarity_score * score
    
    sorted_tags = sorted(tag_scores.items(), key=lambda x: x[1], reverse=True)
    return sorted_tags


matching_tags = find_matching_tags(keywords, tags)

print(json.dumps(( keywords, matching_tags)))
