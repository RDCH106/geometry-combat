# -*- coding: utf-8 -*-

import http.server
import threading
import webbrowser
import os

HOST = "0.0.0.0"
PORT = 8000

def run_server():

    # Only share app folder
    web_dir = os.path.join(os.path.dirname(__file__), 'app')
    print(web_dir)
    os.chdir(web_dir)

    Handler = http.server.SimpleHTTPRequestHandler

    httpd = http.server.HTTPServer((HOST, PORT), Handler)
    print("Serving HTTP on %s port %s ..." % (HOST,PORT))
    httpd.serve_forever()
    
def launch_browser():
    def open_browser_call():
        # Open URL in a new tab, if a browser window is already open.
        webbrowser.open_new_tab('http://localhost:8000/')

    th = threading.Timer(interval=5, function=open_browser_call)  # Wait 5 seconds
    th.start()


if __name__ == "__main__":
    launch_browser()
    run_server()
