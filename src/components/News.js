import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  articles= [
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Mat Smith",
    "title": "The Morning After: Meta could launch a Twitter competitor next month",
    "description": "Meta has long been rumored to be building a platform to rival Twitter. After months of speculation, there are finally some details on how it might turn out, according to digital media marketing expert Lia Haberman, who has heard about the app through content …",
    "url": "https://www.engadget.com/themorningaftermetacouldlaunchatwittercompetitornextmonth111543954.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/nbbyqy5Ca.eCKGzLfcl5CA~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg/https://mediambstpubue1.s3.amazonaws.com/creatruploadedimages/202211/6e32a9f0608e11ed85af6f6f0330bc92.cf.jpg",
    "publishedAt": "20230522T11:15:43Z",
    "content": "Meta has long been rumored to be building a platform to rival Twitter. After months of speculation, there are finally some details on how it might turn out, according to digital media marketing exper… [+3401 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Nancy Birtwhistle",
    "title": "Sausage traybake and eve’s pudding: Nancy Birtwhistle’s budget apple recipes",
    "description": "A thrifty, flavourpacked sausage traybake using up softened apples and other leftover veg, and a delectable eve’s pudding made out of old apples and stale breadWhen I spot a few apples in the fruit bowl looking wrinkled, dry and past their best, I have these…",
    "url": "https://www.theguardian.com/food/2023/may/22/sausagetraybakeevespuddingbudgetrecipesnancybirtwhistle",
    "urlToImage": "https://i.guim.co.uk/img/media/9de4d3d0e84031614e1b882b9519fbd5bc8ca400/0_890_5721_3433/master/5721.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=4fffa58cb707d9f35dd0f1fe9952690d",
    "publishedAt": "20230522T12:00:33Z",
    "content": "When I spot a few apples in the fruit bowl looking wrinkled, dry and past their best, I have these recipes to hand to ensure they dont end their days in the compost bin. Pork and apple are great toge… [+3814 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Samuel Gibbs Consumer technology editor",
    "title": "Beats Studio Buds+ review: Apple’s latest for Android and iPhone",
    "description": "Compact Bluetooth earbuds get better sound, noisecancelling and battery life – and a funky clear caseThe latest Beats earbuds from Apple improve the noisecancelling and sound of their predecessors – and make them easier to use across almost all phones while…",
    "url": "https://www.theguardian.com/technology/2023/may/22/beatsstudiobudsreviewappleandroidiphonebluetoothearbuds",
    "urlToImage": "https://i.guim.co.uk/img/media/d2fed37d7919f55ce8b170de767768582c34dce8/381_377_4646_2787/master/4646.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTQucG5n&enable=upscale&s=df2aa3600895441f1bebe7a0b2ce6623",
    "publishedAt": "20230522T06:00:48Z",
    "content": "The latest Beats earbuds from Apple improve the noisecancelling and sound of their predecessors and make them easier to use across almost all phones while adding a fresh transparent option.\r\nThe Stu… [+6279 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "John Harris",
    "title": "‘There was all sorts of toxic behaviour’: Timnit Gebru on her sacking by Google, AI’s dangers and big tech’s biases",
    "description": "The Ethiopianborn computer scientist lost her job after pointing out the inequalities built into AI. But after decades working with technology companies, she knows all too much about discrimination‘It feels like a gold rush,” says Timnit Gebru. “In fact, it …",
    "url": "https://www.theguardian.com/lifeandstyle/2023/may/22/therewasallsortsoftoxicbehaviourtimnitgebruonhersackingbygoogleaisdangersandbigtechsbiases",
    "urlToImage": "https://i.guim.co.uk/img/media/8315430000e6e4e64af6679eb5fcd095c521b17a/246_635_4709_2825/master/4709.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlayalign=bottom%2Cleft&overlaywidth=100p&overlaybase64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=301a4055c4f86892a9045114f1104f57",
    "publishedAt": "20230522T05:00:47Z",
    "content": "It feels like a gold rush, says Timnit Gebru. In fact, it is a gold rush. And a lot of the people who are making money are not the people actually in the midst of it. But its humans who decide whethe… [+21146 chars]"
    },
    
  ]
  constructor(){
    super();
    console.log("hello i am a constructer");
    this.state = {
      articles: this.articles,
      loading : false
    }
  }
  async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8a833cec2724d1d869c4dace30a0b3d&page=1";
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
  this.setState({articles: parseData.articles})
  }
  prevclik=()=>{
    console.log("previous");
  }
  nextclik= async ()=>{
    console.log("Next");
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8a833cec2724d1d869c4dace30a0b3d&page=${this.state.page + 1}";
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
  })
  }
  render() {
    console.log("render");
    return (
      <div className="container my-3">
        <h2>~~~~~~Desh Duniya Ki Khabre with anurag kushwaha ~~~~~~</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4"  key={element.url}>
          <NewsItem  title={element.title} discription={element.discription} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
        })};
        </div>
        <div className="container d-flex justify-content-between">
        <button disable={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.prevClik}>&larr;Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.nextClik}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
