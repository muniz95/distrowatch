<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>Frequently Asked Questions</b></h2>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Frequently Asked Questions about DistroWatch
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          These are some of the frequently asked questions we receive and our answers.
        </div>
      </div>
    </div>
    <hr>
    <div class="row block">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="row" v-for="question in questions" :key="question.id">
          <span @click="setCurrentQuestion(question)">{{question.question}}</span>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
        <DwFAQDetails :question="currentQuestion" />
      </div>
    </div>
  </div>
</template>

<script>
import DwFAQDetails from '@/components/faq/FAQDetails'
export default {
  name: 'faq',
  components: { DwFAQDetails },
  data () {
    return {
      questions: [],
      currentQuestion: {}
    }
  },
  methods: {
    setCurrentQuestion (question) {
      this.currentQuestion = question
    }
  },
  created () {
    this.questions = [
      {
        id: 1,
        question: 'What is DistroWatch?',
        answer: 'The DistroWatch website was first published on 31 May 2001.'
      },
      {
        id: 2,
        question: 'I am new to Linux, which distribution should I choose?',
        answer: 'Welcome! There are hundreds of Linux distributions and that can feel overwhelming when it comes time to choose which one to use.'
      },
      {
        id: 3,
        question: 'What kind of news is published on the main page?',
        answer: 'First and foremost, news about release announcements of Linux distributions and BSDs (both stable and development) are published on the main page.'
      },
      {
        id: 4,
        question: 'A new version of a distribution was released, but it wasn\'t announced on DistroWatch.Why ?',
        answer: 'This situation can happen for one of the following reasons: The release was not announced on the distribution \'s own website.'
      },
      {
        id: 5,
        question: 'Why do you not list Android, arguably the world\'s most popular Linux distribution ?',
        answer: 'Android does run on the Linux kernel, but it is not one single Linux distribution.'
      },
      {
        id: 6,
        question: 'Is the information on your site accurate? ',
        answer: 'It is our objective to provide correct and accurate information.'
      },
      {
        id: 7,
        question: 'Some distributions include more than one version of a package. How do you deal with these situations? ',
        answer: 'Some packages, such as Bash, BIND, GCC, GTK+, Python, Qt, and the Linux kernel, are often supplied in multiple versions in some distributions.'
      },
      {
        id: 8,
        question: 'I have just developed/discovered a new distribution. Will you list it?',
        answer: 'We probably will, assuming the project is maintained and provides some basic infrastructure such as a website, documentation, a way for users to get support and a method for reporting bugs.'
      },
      {
        id: 9,
        question: 'Why does DistroWatch include BSDs and Solaris?',
        answer: 'Originally, the site covered Linux distributions only.'
      },
      {
        id: 10,
        question: 'I am trying to find distributions with/without a feature or package. How can I do this? ',
        answer: 'Most of the time people can find what they are looking for through our Search page.'
      },
      {
        id: 11,
        question: 'What is the difference between the Dormant and Discontinued status? ',
        answer: 'A distribution which has not put out a new release in two or more years is marked as being Dormant in our database.'
      },
      {
        id: 12,
        question: 'Why is distro X still on the waiting list and not in your database? ',
        answer: 'We receive a lot of new distribution submissions, usually several a month and it takes time to properly evaluate new projects.'
      },
      {
        id: 13,
        question: 'Why is distro X not in your database? ',
        answer: 'There are a few possible reasons. One is that the distribution may be on our waiting list and has not yet been moved over to our database yet.'
      },
      {
        id: 14,
        question: 'Distribution X charges its users money. Is that ethical/legal? Why is it on your website? ',
        answer: 'Generally speaking when we receive this question it is because people tend to assume "free software" means software that is available at no monetary cost.'
      },
      {
        id: 15,
        question: 'How can I find out if a distro has UEFI support?',
        answer: 'Knowing for certain if a distro supports UEFI, and to what degree, is difficult.'
      },
      {
        id: 16,
        question: 'Do you provide any e-mail newsletters or "news by e-mail" features? ',
        answer: 'With the current amount of spam hammering mail servers around the world, often combined with harsh anti-spam efforts, we do not consider e-mail to be an ideal medium for transmitting frequent news updates.'
      },
      {
        id: 17,
        question: 'Where can I find laptops/computers that work with Linux?',
        answer: 'We have a page dedicated to helping people find computers and computer parts which either ship with Linux pre-installed or are known to work with open source operating systems. Please see our Linux/BSD Compatible Hardware page for a list of vendors and other resources such as hardware compatibility databases.'
      },
      {
        id: 18,
        question: 'What is this "Page Hit Ranking"?',
        answer: 'It is a light-hearted way of looking at popularity of distribution.'
      },
      {
        id: 19,
        question: 'Why is Ubuntu split into multiple entries while Fedora and Linux Mint are each treated as one distro? This lowers its page hit ranking. ',
        answer: 'We treat Ubuntu, Kubuntu, Lubuntu, Xubuntu, Ubuntu Kylin, etc as separate distributions for several reasons.'
      },
      {
        id: 20,
        question: 'Are there any plans to introduce a mobile version of the DistroWatch website? ',
        answer: 'Creating a mobile version of the website is on our to-do list, though it is a relatively low priority item.'
      },
      {
        id: 21,
        question: 'You list so many distributions. Which one do you use? ',
        answer: 'We tend to switch distributions and desktop environments on a semi-regular basis, both to explore what is available and in an attempt to remain as objective as possible.'
      }
    ]
  }
}

</script>
<style>
  .heading {
    background-color: #0B3B24 !important;
    color: white;
  }

  .block {
    background-color: #F6EDC8 !important;
  }

  .block-heading {
    border-style: solid;
    border-width: 1px;
    /*margin: 10px;*/
  }

</style>
