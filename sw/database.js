const mongoose = require('mongoose');
const URI = 'mongodb+srv://vitor:Tm.130722@clusterdev.ckzjtqw.mongodb.net/';

mongoose.set('useNewUrlParser', true); // Corrigido de 'useNewUrlparser' para 'useNewUrlParser'
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true); // Corrigido de 'useUnifiedtopology' para 'useUnifiedTopology'

mongoose
  .connect(URI)
  .then(() => console.log('DB is up!'))
  .catch((err) => console.error('Connection error:', err));