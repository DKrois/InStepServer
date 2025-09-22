import express from 'express';
import { port } from './config.json' with { type: 'json' };

const app = express();
app.use(express.json());

app.use(express.static('public'));
app.get('/api', handleGETRequest);
app.post('/api', handlePOSTRequest);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

async function handleGETRequest(req: express.Request, res: express.Response) {
    res.send('heyyy');
}

async function handlePOSTRequest(req: express.Request, res: express.Response) {
    res.send('heyyy2');
}

// GUI for server ?
// repo for IDM?