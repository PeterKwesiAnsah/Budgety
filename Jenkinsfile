pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
    }
      stages {
        stage('Unit Testing') {
            steps {
                sh 'npm run test'
            }
        }
    }
}