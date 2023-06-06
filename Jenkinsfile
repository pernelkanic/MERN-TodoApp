pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/pernelkanic/MERN-TodoApp', branch: 'main')
      }
    }

    stage('dir switch') {
      steps {
        bat 'cd Frontend'
      }
    }

    stage('list') {
      steps {
        bat 'dir'
      }
    }

    stage('switch') {
      steps {
        dir(path: 'Frontend') {
          bat 'npm install '
        }

      }
    }

    stage('docker login') {
      agent any
      environment {
        Docker_user = 'venkatakrishnanraghavan'
        Docker_pwd = 'venkat051203'
      }
      steps {
        powershell 'docker login -u venkatakrishnanraghavan -p venkat051203'
      }
    }

    stage('dockerimage') {
      steps {
        bat 'docker build -t venkatakrishnanraghavan/todofrontt  Frontend/dockerfile'
      }
    }

  }
}