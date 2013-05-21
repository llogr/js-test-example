module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jasmine: {
      src: ['lib/**/*.js','src/js/**/*.js'],
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    },

    watch: {
      scripts: {
        files: ['spec/**/*.js'],
        tasks: ['jasmine']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jasmine']);
};