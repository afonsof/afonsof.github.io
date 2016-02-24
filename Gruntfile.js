module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{removeViewBox: true}]
                },
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.*'],
                    dest: 'assets/images/'
                }]
            }

        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: {
                    'assets/css/main.css': 'assets/css/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css'],
                    dest: 'assets/css'
                }]
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['imagemin', 'sass', 'cssmin']);
};