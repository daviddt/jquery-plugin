module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		eslint: {
			options: {
				configFile: 'eslint.json'
			},
			target: ['js/plugin.js']
		},

		watch: {
			scripts: {
				files: ['js/plugin.js'],
				tasks: ['eslint']
		  	}
		}

	});

	grunt.registerTask('default', ['watch']);
	
};