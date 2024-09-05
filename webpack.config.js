const path = require('path');

module.exports = {
      entry: './app.js', // Votre fichier d'entrée principal
      output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour le fichier bundle
      },
      mode: 'production', // ou 'development' selon vos besoins
};
