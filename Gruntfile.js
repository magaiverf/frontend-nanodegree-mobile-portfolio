module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            // uglify task configuration goes here.
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true
                },
                files: {                                   // Dictionary of files
                    'index.html': './src/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
};