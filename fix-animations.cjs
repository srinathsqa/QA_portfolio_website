const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('D:\\portfolio-main\\portfolio-main\\src\\components', function(filePath) {
    if(filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // This regex looks for <motion... > tag
        content = content.replace(/<motion\.[a-zA-Z0-9]+([^>]*?)>/g, (match, p1) => {
            if (p1.includes('whileInView') && !p1.includes('viewport')) {
                modified = true;
                return match.replace('whileInView', 'viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}\n        whileInView');
            }
            return match;
        });

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + filePath);
        }
    }
});
