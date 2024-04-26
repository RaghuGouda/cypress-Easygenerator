import * as http from 'http';
import * as path from 'path';
import * as fs from 'fs';

const port = 8080;
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'task.html');
  const stat = fs.statSync(filePath);
  
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': stat.size
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
