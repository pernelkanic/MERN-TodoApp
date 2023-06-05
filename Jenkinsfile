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
        dir(path: '/Frontend')
      }
    }

  }
}