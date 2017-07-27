#!/bin/bash

cd app
python3 -m http.server &
firefox localhost:8000
