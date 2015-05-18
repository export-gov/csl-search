---
permalink: "publishing.html"
layout: plain
title: Country Commercial Guides 
published: true
---

#CCG Markdown Publishing 

The goal is to convert 200 Country Commercial Guide PDFs into Markdown format, for better web publishing and to expose content on [developer.trade.gov](http://developer.trade.gov/). Below are some steps to best accomplish this:

###Text:

1. Go to [Cloud Convert](https://cloudconvert.com/pdf-to-doc) to convert PDF to Doc
2. Select Files --> Add from URL
3. Paste the PDF URL and Add
4. Click Start Conversion
5. Download and open Doc file locally
6. Copy and paste all text into this [markdown editor](http://markable.in/editor/)
7. The headings are most important. Please make sure the headings are consistent with the table of contents
8. Once complete, go to Export --> Download Markdown

###Images:

* Take screenshots of the images from the PDFs and convert to .png format 
* Use these [images](https://drive.google.com/drive/u/1/#folders/0BzuZudIjPPmBZUhjbmtJRzZTTXc/0BzuZudIjPPmBWk0tM0pMdjcyVW8) for the guides below

###Formating:

* Here is a [Markdown Cheatsheet](#cheatsheet) to use as a reference
* Use this markdown file as a [model](https://raw.githubusercontent.com/GovWizely/ccg/gh-pages/_posts/2014-12-15-columbia.md)

###Guides to Work On:

* China [http://export.gov/china/build/groups/public/@eg_cn/documents/webcontent/eg_cn_025684.pdf](http://export.gov/china/build/groups/public/@eg_cn/documents/webcontent/eg_cn_025684.pdf)

* Argentina [http://www.buyusainfo.net/docs/x_9234444.pdf](http://www.buyusainfo.net/docs/x_9234444.pdf)

* Panama [http://www.camarapr.org/WebC12/Country-profiles/Country-Commercial-Guide-Panama2012.pdf](http://www.camarapr.org/WebC12/Country-profiles/Country-Commercial-Guide-Panama2012.pdf)

#[UPLOAD ALL FILES HERE](https://drive.google.com/drive/u/1/#folders/0BzuZudIjPPmBZUhjbmtJRzZTTXc)

[](#tables)
---

<h1 id="cheatsheet" style="margin-top:50px;">Markdown Cheatsheet</h1>


**Headings** 

#H1
	#

##H2
	##

###H3
	###

####H4
	####

####Bold

	**bold**

####_Italic_

	_Italic_

**Links**
 
[Google](www.google.com)

	[Google](www.google.com)

**Images**

![Country](images/uscs.png)

	![Country](images/country.png)

**Line break**

---

	---

**Lists**

* 
* 
* 

---

1. 
2. 
3.

<h3 id="tables" >Tables</h3>

| Tables        | Are Cool      |
| ------------- |:-------------:| 
| col 2 is      | right-aligned | 
| col 1 is      | left-aligned  | 
| zebra stripes | are neat      |


		| Tables        | Are Cool      |
		| ------------- |:-------------:| 
		| col 2 is      | right-aligned | 
		| col 1 is      | left-aligned  | 
		| zebra stripes | are neat      |