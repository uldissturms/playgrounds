import sys
import requests

if __name__ == "__main__":
    for line in sys.stdin:
        payload = line[:-1]
        r = requests.post('http://localhost:9200/tests/test', data=payload)
        sys.stdout.write(payload)
