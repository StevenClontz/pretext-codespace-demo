var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section-demo-pretext",
  "level": "1",
  "url": "section-demo-pretext.html",
  "type": "Section",
  "number": "1.1",
  "title": "Demoing some PreTeXt features",
  "body": " Demoing some PreTeXt features  Hello .  And .   A circle   A circle of radius three centered at the origin.     "
},
{
  "id": "circle",
  "level": "2",
  "url": "section-demo-pretext.html#circle",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A circle   A circle of radius three centered at the origin.    "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt . Wasn't amazing?  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
