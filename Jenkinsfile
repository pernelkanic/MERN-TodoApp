pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pernelkanic/MERN-TodoApp', branch: 'main')
      }
    }

    stage('npm build') {
      steps {
        sh 'cd /Frontend && npm i && npm run test:unit'
      }
    }

  }
}