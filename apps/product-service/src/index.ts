import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(
    cors({
        origin: ["http://localhost:3002", "http://localhost:3003", "http://localhost:3001", "http://localhost:3000"],
        credentials: true,
    })
);

app.listen(PORT, () => {
console.log(`Product service is running on http://localhost:${PORT}`);
});
