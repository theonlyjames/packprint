module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {                              // Task
		  dist: {                            // Target
		    options: {                       // Target options
		      style: 'expanded'
		    },
		    files: {                         // Dictionary of files
		      'css/bootstrap.css': 'sass/bootstrap.scss',       // 'destination': 'source'
		      'css/bootstrap-responsive.css': 'sass/bootstrap-responsive.scss'       // 'destination': 'source'
		    }
		  }
		},
		watch: {
		  sass: {
		    // We watch and compile sass files as normal but don't live reload here
		    files: ['sass/*.scss'],
		    tasks: ['sass'],
		  },
		  livereload: {
		    // Here we watch the files the sass task will compile to
		    // These files are sent to the live reload server after sass compiles to them
		    options: { livereload: true },
		    files: ['*.html', 'css/*', 'js/*'],
		  },
		},
		compass: {                  // Task
		  dist: {                   // Target
		    options: {              // Target options
		    	config: 'config.rb',
		      sassDir: 'sass',
		      cssDir: 'css',
		      environment: 'production'
		    }
		  },
		  dev: {                    // Another target
		    options: {
		      sassDir: 'sass',
		      cssDir: 'css'
		    }
		  }
		}
	});

		// Load tasks
		grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-compass');

		// Default tasks
		grunt.registerTask('default', ['watch', 'sass', 'compass']);
}
