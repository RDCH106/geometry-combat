# -*- coding: utf-8 -*-

import http.server

HOST = "0.0.0.0"
PORT = 8000

# Only share app folder
web_dir = os.path.join(os.path.dirname(__file__), 'app')
os.chdir(web_dir)

Handler = http.server.SimpleHTTPRequestHandler

httpd = http.server.HTTPServer((HOST, PORT), Handler)
print("Serving HTTP on %s port %s ..." % (HOST,PORT))
httpd.serve_forever()