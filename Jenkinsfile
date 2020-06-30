pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Unit Testing') {
            steps {
                sh 'npm run test'
            }
        }
    }
     
}
