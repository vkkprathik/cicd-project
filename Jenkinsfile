pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Stop Old App') {
            steps {
                sh 'pkill node || true'
            }
        }

        stage('Start App') {
            steps {
                sh 'nohup node app.js > app.log 2>&1 &'
            }
        }
    }
}
