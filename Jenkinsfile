pipeline {
    agent any

    stages {
        stage ('Compile Stage') {

            steps {
                withMaven(maven : 'Maven_3.6.3') {
                    sh 'mvn clean compile'
                }
            }
        }

        stage ('Unit testing Stage') {

            steps {
                withMaven(maven : 'Maven_3.6.3') {
                    sh 'mvn test'
                }
            }
        }

    }
}
