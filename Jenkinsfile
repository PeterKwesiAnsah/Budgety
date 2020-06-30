pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                npm 'install'
            }
        }
        stage('Unit Testing') {
            steps {
                npm 'run test'
            }
        }
    }
     
}
