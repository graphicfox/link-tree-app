import app from './App';
import config from './config/Config';

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});