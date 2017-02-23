(function (global) {


    var map = {
        'app': 'app',
        
        '@angular': '@angular',
        'rxjs': 'rxjs',
        'vdl-angular': 'npm:vdl-angular/vdl.umd.js'
    };

    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js'}
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'forms',
        'http',
        'platform-browser',
        'platform-browser-dynamic'
    ];

    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js'};
    }

    function packUmd(pkgName){
        packages['@angular/' + pkgName] = { main: '/bundles' + pkgName + '.und.js', defaultExtension: 'js'};
    }

    var setPackageConfig = System.packageWithIndex ? packIndex: packUmd;

    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
    
})(this);

