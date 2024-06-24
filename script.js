var downbool=false;
var bigstring=""
function createLxcTable(LxC){
   var hexcode=""
   var LoA=""
   var fC=""
  if(LxC=="1 x 1"||LxC=="2 x 1"||LxC=="3 x 1"||LxC=="4 x 1"||LxC=="5 x 1"||LxC=="1 x 2"||LxC=="1 x 3"||LxC=="1 x 4"){
     hexcode="#00B050"
     LoA="Accepted"
     fC="#000000"
  }else if(LxC=="2 x 2"||LxC=="3 x 2"){
    hexcode="#00B050"
    LoA="Accepted with Monitoring"
    fC="#000000"
  }else if(LxC=="4 x 2"||LxC=="5 x 2"||LxC=="4 x 3"||LxC=="3 x 3"||LxC=="2 x 3"||LxC=="3 x 4"||LxC=="2 x 4"||LxC=="2 x 5"||LxC=="1 x 5"){
    hexcode="#FFFF00"
    LoA="Requires Mitigation"
    fC="#000000"
  }else{
    hexcode="#FF0000"
    LoA="Requires Mitigation"
    fC="#FFFFFF"
  }
  bigstring+="<table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 align=right width=275 style='width:206.6pt;border-collapse:collapse;mso-yfti-tbllook:1184;mso-table-lspace:9.0pt;margin-left:6.75pt;mso-table-rspace:9.0pt;margin-right:6.75pt;mso-table-bspace:8.0pt;margin-bottom:5.75pt;mso-table-anchor-vertical:paragraph;mso-table-anchor-horizontal:margin;mso-table-left:right;mso-table-top:4.6pt;mso-padding-alt:0in 0in 0in 0in'><tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;mso-yfti-lastrow:yes;height:21.0pt'>\n<td width=59 style='width:44.25pt;border:solid black 1.0pt;mso-border-alt:solid black .75pt;background:"+hexcode+";padding:0in 0in 0in 0in;height:21.0pt'>\n<p class=MsoNormal align=center style='text-align:center;line-height:106%;mso-pagination:widow-orphan;text-autospace:ideograph-other;vertical-align:baseline;mso-element:frame;mso-element-frame-hspace:9.0pt;mso-element-wrap:around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal:margin;mso-element-left:right;mso-element-top:4.6pt;mso-height-rule:exactly'><span style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:\"Times New Roman\";color:"+fC+"'>"+LxC+"</span><span style='font-size:9.0pt;line-height:106%;font-family:\"Segoe UI\",sans-serif;mso-fareast-font-family:\"Times New Roman\"'><o:p></o:p></span></p>\n</td>\n<td width=216 style='width:162.35pt;border:solid black 1.0pt;border-left: none;mso-border-left-alt:solid black .75pt;mso-border-alt:solid black .75pt; background:white;padding:0in 0in 0in 0in;height:21.0pt'> <p class=MsoNormal align=center style='text-align:center;line-height:106%; mso-pagination:widow-orphan;text-autospace:ideograph-other;vertical-align: baseline;mso-element:frame;mso-element-frame-hspace:9.0pt;mso-element-wrap: around;mso-element-anchor-vertical:paragraph;mso-element-anchor-horizontal: margin;mso-element-left:right;mso-element-top:1.2pt;mso-height-rule:exactly'><span style='font-size:12.0pt;line-height:106%;mso-fareast-font-family:\"Times New Roman\"; color:black'>"+LoA+"</span><span style='font-size:9.0pt;line-height:106%; font-family:\"Segoe UI\",sans-serif;mso-fareast-font-family:\"Times New Roman\"'><o:p></o:p></span></p> </td> </tr> </table>"}
function createLxCMB(L,DL,DC,RRD,DRMSA,LoE){
  
  bigstring+="<p class=MsoListParagraph style='margin-left:.5in;text-indent:-.25in; mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Wingdings; mso-fareast-font-family:Wingdings;mso-bidi-font-family:Wingdings;mso-font-width: 99%'><span style='mso-list:Ignore'>v<span style='font:7.0pt \"Times New Roman\"'>&nbsp; </span></span></span><![endif]><span class=SpellE><b>LxC</b></span><b> Drivers for Likelihood:</b><b style='mso-bidi-font-weight:normal'> </b><span style='mso-bidi-font-weight:bold'>"+L+". </span>"+DL+"</p> <p class=MsoNormal><o:p>&nbsp;</o:p></p> <p class=MsoListParagraph style='margin-left:.5in;text-indent:-.25in; mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Wingdings; mso-fareast-font-family:Wingdings;mso-bidi-font-family:Wingdings;mso-font-width: 99%'><span style='mso-list:Ignore'>v<span style='font:7.0pt \"Times New Roman\"'>&nbsp; </span></span></span><![endif]><span class=SpellE><b>LxC</b></span><b> Drivers for Consequence:</b><b style='mso-bidi-font-weight:normal'> </b><span style='mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin; mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family: Calibri;mso-bidi-theme-font:minor-latin;mso-bidi-font-weight:bold'>"+DC+"<span style='letter-spacing:-.3pt'> </p> <p class=MsoNormal><span style='mso-bidi-font-weight:bold'><o:p>&nbsp;</o:p></span></p> <p class=MsoListParagraph style='margin-left:.5in;text-indent:-.25in; mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Wingdings; mso-fareast-font-family:Wingdings;mso-bidi-font-family:Wingdings;mso-font-width: 99%'><span style='mso-list:Ignore'>v<span style='font:7.0pt \"Times New Roman\"'>&nbsp; </span></span></span><![endif]><b>Rationale for Risk Disposition:</b><span style='font-size:16.0pt;mso-bidi-font-weight:bold'> </span><span style='mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin; mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family: Calibri;mso-bidi-theme-font:minor-latin;mso-bidi-font-weight:bold'>"+RRD+"</span><span style='mso-bidi-font-weight:bold'><o:p></o:p></span></p> <p class=MsoNormal><span style='mso-bidi-font-weight:bold'><o:p>&nbsp;</o:p></span></p> <p class=MsoListParagraph style='margin-left:.5in;text-indent:-.25in; mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Wingdings; mso-fareast-font-family:Wingdings;mso-bidi-font-family:Wingdings;mso-font-width: 99%'><span style='mso-list:Ignore'>v<span style='font:7.0pt \"Times New Roman\"'>&nbsp; </span></span></span><![endif]><b>DRM Specific Assumptions:</b><span style='font-size:16.0pt;mso-bidi-font-weight:bold'> </span><span style='mso-bidi-font-weight:bold'>"+DRMSA+"<o:p></o:p></span></p> <p class=MsoNormal><span style='mso-bidi-font-weight:bold'><o:p>&nbsp;</o:p></span></p> <p class=MsoListParagraph style='margin-left:.5in;text-indent:-.25in; mso-list:l0 level1 lfo1'><![if !supportLists]><span style='font-family:Wingdings; mso-fareast-font-family:Wingdings;mso-bidi-font-family:Wingdings;mso-font-width: 99%'><span style='mso-list:Ignore'>v<span style='font:7.0pt \"Times New Roman\"'>&nbsp; </span></span></span><![endif]><b>DRM Specific Evidence/Level of Evidence:</b><span style='font-size:16.0pt;mso-bidi-font-weight:bold'> </span><span style='mso-bidi-font-weight:bold'>"+LoE+"<o:p></o:p></span></p> <p class=MsoNormal><span style='font-size:16.0pt;mso-bidi-font-weight:bold'><o:p>&nbsp;</o:p></span></p> <p class=MsoNormal><span style='font-size:16.0pt;mso-bidi-font-weight:bold'><o:p>&nbsp;</o:p></span></p>"
}
// function createLxCDC(){}
// function createRRD(){}
// function createDRMSA(){}
// function createLoE(){}
function writer(){
  var LEOSIMOLxC=document.getElementById("LEOSIMOLxC").value;
  var LEOSIMOLxCL=document.getElementById("LEOSIMOLxCL").value;
  var LEOSIMOLxCDL=document.getElementById("LEOSIMOLxCDL").value;
  var LEOSIMOLxCDC=document.getElementById("LEOSIMOLxCDC").value;
  var LEOSIMORRD=document.getElementById("LEOSIMORRD").value;
  var LEOSIMODSA=document.getElementById("LEOSIMODSA").value;
  var LEOSIMOLxCLoE=document.getElementById("LEOSIMOLxCLoE").value;
  var LEOSLTHLxC=document.getElementById("LEOSLTHLxC").value;
  var LEOSLTHLxCL=document.getElementById("LEOSLTHLxCL").value;
  var LEOSLTHLxCDL=document.getElementById("LEOSLTHLxCDL").value;
  var LEOSLTHLxCDC=document.getElementById("LEOSLTHLxCDC").value;
  var LEOSLTHRRD=document.getElementById("LEOSLTHRRD").value;
  var LEOSLTHDSA=document.getElementById("LEOSLTHDSA").value;
  var LEOSLTHLxCLoE=document.getElementById("LEOSLTHLxCLoE").value;
  var LEOLIMOLxC=document.getElementById("LEOLIMOLxC").value;
  var LEOLIMOLxCL=document.getElementById("LEOLIMOLxCL").value;
  var LEOLIMOLxCDL=document.getElementById("LEOLIMOLxCDL").value;
  var LEOLIMOLxCDC=document.getElementById("LEOLIMOLxCDC").value;
  var LEOLIMORRD=document.getElementById("LEOLIMORRD").value;
  var LEOLIMODSA=document.getElementById("LEOLIMODSA").value;
  var LEOLIMOLxCLoE=document.getElementById("LEOLIMOLxCLoE").value;
  var LEOLLTHLxC=document.getElementById("LEOLLTHLxC").value;
  var LEOLLTHLxCL=document.getElementById("LEOLLTHLxCL").value;
  var LEOLLTHLxCDL=document.getElementById("LEOLLTHLxCDL").value;
  var LEOLLTHLxCDC=document.getElementById("LEOLLTHLxCDC").value;
  var LEOLLTHRRD=document.getElementById("LEOLLTHRRD").value;
  var LEOLLTHDSA=document.getElementById("LEOLLTHDSA").value;
  var LEOLLTHLxCLoE=document.getElementById("LEOLLTHLxCLoE").value;
  var LOSIMOLxC=document.getElementById("LOSIMOLxC").value;
  var LOSIMOLxCL=document.getElementById("LOSIMOLxCL").value;
  var LOSIMOLxCDL=document.getElementById("LOSIMOLxCDL").value;
  var LOSIMOLxCDC=document.getElementById("LOSIMOLxCDC").value;
  var LOSIMORRD=document.getElementById("LOSIMORRD").value;
  var LOSIMODSA=document.getElementById("LOSIMODSA").value;
  var LOSIMOLxCLoE=document.getElementById("LOSIMOLxCLoE").value;
  var LOSLTHLxC=document.getElementById("LOSLTHLxC").value;
  var LOSLTHLxCL=document.getElementById("LOSLTHLxCL").value;
  var LOSLTHLxCDL=document.getElementById("LOSLTHLxCDL").value;
  var LOSLTHLxCDC=document.getElementById("LOSLTHLxCDC").value;
  var LOSLTHRRD=document.getElementById("LOSLTHRRD").value;
  var LOSLTHDSA=document.getElementById("LOSLTHDSA").value;
  var LOSLTHLxCLoE=document.getElementById("LOSLTHLxCLoE").value;
  var LOLIMOLxC=document.getElementById("LOLIMOLxC").value;
  var LOLIMOLxCL=document.getElementById("LOLIMOLxCL").value;
  var LOLIMOLxCDL=document.getElementById("LOLIMOLxCDL").value;
  var LOLIMOLxCDC=document.getElementById("LOLIMOLxCDC").value;
  var LOLIMORRD=document.getElementById("LOLIMORRD").value;
  var LOLIMODSA=document.getElementById("LOLIMODSA").value;
  var LOLIMOLxCLoE=document.getElementById("LOLIMOLxCLoE").value;
  var LOLLTHLxC=document.getElementById("LOLLTHLxC").value;
  var LOLLTHLxCL=document.getElementById("LOLLTHLxCL").value;
  var LOLLTHLxCDL=document.getElementById("LOLLTHLxCDL").value;
  var LOLLTHLxCDC=document.getElementById("LOLLTHLxCDC").value;
  var LOLLTHRRD=document.getElementById("LOLLTHRRD").value;
  var LOLLTHDSA=document.getElementById("LOLLTHDSA").value;
  var LOLLTHLxCLoE=document.getElementById("LOLLTHLxCLoE").value;
  var LOSSIMOLxC=document.getElementById("LOSSIMOLxC").value;
  var LOSSIMOLxCL=document.getElementById("LOSSIMOLxCL").value;
  var LOSSIMOLxCDL=document.getElementById("LOSSIMOLxCDL").value;
  var LOSSIMOLxCDC=document.getElementById("LOSSIMOLxCDC").value
  var LOSSIMORRD=document.getElementById("LOSSIMORRD").value;
  var LOSSIMODSA=document.getElementById("LOSSIMODSA").value;
  var LOSSIMOLxCLoE=document.getElementById("LOSSIMOLxCLoE").value;
  var LOSSLTHLxC=document.getElementById("LOSSLTHLxC").value;
  var LOSSLTHLxCL=document.getElementById("LOSSLTHLxCL").value;
  var LOSSLTHLxCDL=document.getElementById("LOSSLTHLxCDL").value;
  var LOSSLTHLxCDC=document.getElementById("LOSSLTHLxCDC").value;
  var LOSSLTHRRD=document.getElementById("LOSSLTHRRD").value;
  var LOSSLTHDSA=document.getElementById("LOSSLTHDSA").value;
  var LOSSLTHLxCLoE=document.getElementById("LOSSLTHLxCLoE").value;
  var LOSLIMOLxC=document.getElementById("LOSLIMOLxC").value;
  var LOSLIMOLxCL=document.getElementById("LOSLIMOLxCL").value;
  var LOSLIMOLxCDL=document.getElementById("LOSLIMOLxCDL").value;
  var LOSLIMOLxCDC=document.getElementById("LOSLIMOLxCDC").value;
  var LOSLIMORRD=document.getElementById("LOSLIMORRD").value;
  var LOSLIMODSA=document.getElementById("LOSLIMODSA").value;
  var LOSLIMOLxCLoE=document.getElementById("LOSLIMOLxCLoE").value;
  var LOSLLTHLxC=document.getElementById("LOSLLTHLxC").value;
  var LOSLLTHLxCL=document.getElementById("LOSLLTHLxCL").value;
  var LOSLLTHLxCDL=document.getElementById("LOSLLTHLxCDL").value;
  var LOSLLTHLxCDC=document.getElementById("LOSLLTHLxCDC").value;
  var LOSLLTHRRD=document.getElementById("LOSLLTHRRD").value;
  var LOSLLTHDSA=document.getElementById("LOSLLTHDSA").value;
  var LOSLLTHLxCLoE=document.getElementById("LOSLLTHLxCLoE").value;
  var MPrIMOLxC=document.getElementById("MPrIMOLxC").value;
  var MPrIMOLxCL=document.getElementById("MPrIMOLxCL").value;
  var MPrIMOLxCDL=document.getElementById("MPrIMOLxCDL").value;
  var MPrIMOLxCDC=document.getElementById("MPrIMOLxCDC").value;
  var MPrIMORRD=document.getElementById("MPrIMORRD").value;
  var MPrIMODSA=document.getElementById("MPrIMODSA").value;
  var MPrIMOLxCLoE=document.getElementById("MPrIMOLxCLoE").value;
  var MPrLTHLxC=document.getElementById("MPrLTHLxC").value;
  var MPrLTHLxCL=document.getElementById("MPrLTHLxCL").value;
  var MPrLTHLxCDL=document.getElementById("MPrLTHLxCDL").value;
  var MPrLTHLxCDC=document.getElementById("MPrLTHLxCDC").value;
  var MPrLTHRRD=document.getElementById("MPrLTHRRD").value;
  var MPrLTHDSA=document.getElementById("MPrLTHDSA").value;
  var MPrLTHLxCLoE=document.getElementById("MPrLTHLxCLoE").value;
  var MPlIMOLxC=document.getElementById("MPlIMOLxC").value;
  var MPlIMOLxCL=document.getElementById("MPlIMOLxCL").value;
  var MPlIMOLxCDL=document.getElementById("MPlIMOLxCDL").value;
  var MPlIMOLxCDC=document.getElementById("MPlIMOLxCDC").value;
  var MPlIMORRD=document.getElementById("MPlIMORRD").value;
  var MPlIMODSA=document.getElementById("MPlIMODSA").value;
  var MPlIMOLxCLoE=document.getElementById("MPlIMOLxCLoE").value
  var MPlLTHLxC=document.getElementById("MPlLTHLxC").value;
  var MPlLTHLxCL=document.getElementById("MPlLTHLxCL").value;
  var MPlLTHLxCDL=document.getElementById("MPlLTHLxCDL").value;
  var MPlLTHLxCDC=document.getElementById("MPlLTHLxCDC").value;
  var MPlLTHRRD=document.getElementById("MPlLTHRRD").value;
  var MPlLTHDSA=document.getElementById("MPlLTHDSA").value;
  var MPlLTHLxCLoE=document.getElementById("MPlLTHLxCLoE").value;
createLxcTable(LEOSIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Low Earth Orbit (< 30 days)<o:p></o:p></span></b></p>"
createLxCMB(LEOSIMOLxCL,LEOSIMOLxCDL,LEOSIMOLxCDC,LEOSIMORRD,LEOSIMODSA,LEOSIMOLxCLoE)
  createLxcTable(LEOSLTHLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Low Earth Orbit (< 30 days)<o:p></o:p></span></b></p>"
  createLxCMB(LEOSLTHLxCL,LEOSLTHLxCDL,LEOSLTHLxCDC,LEOSLTHRRD,LEOSLTHDSA,LEOSLTHLxCLoE)
  
  createLxcTable(LEOLIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Low Earth Orbit (30 days - 1 year)<o:p></o:p></span></b></p>"
  createLxCMB(LEOLIMOLxCL,LEOLIMOLxCDL,LEOLIMOLxCDC,LEOLIMORRD,LEOLIMODSA,LEOLIMOLxCLoE)
  
createLxcTable(LEOLLTHLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Low Earth Orbit (30 days - 1 year)<o:p></o:p></span></b></p>"
  createLxCMB(LEOLLTHLxCL,LEOLLTHLxCDL,LEOLLTHLxCDC,LEOLLTHRRD,LEOLLTHDSA,LEOLLTHLxCLoE)
  //started here after break
  createLxcTable(LOSIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (< 30 days)<o:p></o:p></span></b></p>"
  createLxCMB(LOSIMOLxCL,LOSIMOLxCDL,LOSIMOLxCDC,LOSIMORRD,LOSIMODSA,LOSIMOLxCLoE)

  createLxcTable(LOSLTHLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (< 30 days)<o:p></o:p></span></b></p>"
  createLxCMB(LOSLTHLxCL,LOSLTHLxCDL,LOSLTHLxCDC,LOSLTHRRD,LOSLTHDSA,LOSLTHLxCLoE)

  createLxcTable(LOLIMOLxC)
   bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (30 days - 1 yr)<o:p></o:p></span></b></p>"

createLxCMB(LOLIMOLxCL,LOLIMOLxCDL,LOLIMOLxCDC,LOLIMORRD,LOLIMODSA,LOLIMOLxCLoE)

  createLxcTable(LOLLTHLxC)
   bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (30 days - 1 yr)<o:p></o:p></span></b></p>"

  createLxCMB(LOLLTHLxCL,LOLLTHLxCDL,LOLLTHLxCDC,LOLLTHRRD,LOLLTHDSA,LOLLTHLxCLoE)

  createLxcTable(LOSSIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (< 30 days)<o:p></o:p></span></b></p>"

createLxCMB(LOSSIMOLxCL,LOSSIMOLxCDL,LOSSIMOLxCDC,LOSSIMORRD,LOSSIMODSA,LOSSIMOLxCLoE)

  createLxcTable(LOSSLTHLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (< 30 days)<o:p></o:p></span></b></p>"

createLxCMB(LOSSLTHLxCL,LOSSLTHLxCDL,LOSSLTHLxCDC,LOSSLTHRRD,LOSSLTHDSA,LOSSLTHLxCLoE)

  createLxcTable(LOSLIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (30 days - 1 yr)<o:p></o:p></span></b></p>"

createLxCMB(LOSLIMOLxCL,LOSLIMOLxCDL,LOSLIMOLxCDC,LOSLIMORRD,LOSLIMODSA,LOSLIMOLxCLoE)
  
createLxcTable(LOSLLTHLxC)
   bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Lunar Orbital (30 days - 1 yr)<o:p></o:p></span></b></p>"

createLxCMB(LOSLLTHLxCL,LOSLLTHLxCDL,LOSLLTHLxCDC,LOSLLTHRRD,LOSLLTHDSA,LOSLLTHLxCLoE)

  createLxcTable(MPrIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Mars (< 1yr)<o:p></o:p></span></b></p>"

  createLxCMB(MPrIMOLxCL,MPrIMOLxCDL,MPrIMOLxCDC,MPrIMORRD,MPrIMODSA,MPrIMOLxCLoE)

  createLxcTable(MPrLTHLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Mars (< 1yr)<o:p></o:p></span></b></p>"

createLxCMB(MPrLTHLxCL,MPrLTHLxCDL,MPrLTHLxCDC,MPrLTHRRD,MPrLTHDSA,MPrLTHLxCLoE)

  createLxcTable(MPlIMOLxC)
  bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Mars (730 days - 1224 days)<o:p></o:p></span></b></p>"

  createLxCMB(MPlIMOLxCL,MPlIMOLxCDL,MPlIMOLxCDC,MPlIMORRD,MPlIMODSA,MPlIMOLxCLoE)

  createLxcTable(MPlLTHLxC)
   bigstring+="<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt'>Mars (730 days - 1224 days)<o:p></o:p></span></b></p>"

createLxCMB(MPlLTHLxCL,MPlLTHLxCDL,MPlLTHLxCDC,MPlLTHRRD,MPlLTHDSA,MPlLTHLxCLoE)
  
  var bloby=new Blob([bigstring], {type: 'text/html'});
  var url=URL.createObjectURL(bloby)
  return url;
}
function submit(){
  // var brd = document.createElement("p")
  // document.getElementById("body").appendChild(brd)
  console.log("starting the submit function")
  bigstring=""
  bigstring=`<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:Wingdings;
	panose-1:5 0 0 0 0 0 0 0 0 0;
	mso-font-charset:2;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:0 268435456 0 0 -2147483648 0;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:3 0 0 0 1 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1040178053 9 0 511 0;}
@font-face
	{font-family:"Segoe UI";
	panose-1:2 11 5 2 4 2 4 2 2 3;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073683329 9 0 511 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin:0in;
	mso-pagination:none;
	text-autospace:none;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-fareast-font-family:Calibri;}
p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph
	{mso-style-priority:1;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:47.65pt;
	text-indent:-13.45pt;
	mso-pagination:none;
	text-autospace:none;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-fareast-font-family:Calibri;}
span.SpellE
	{mso-style-name:"";
	mso-spl-e:yes;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:Calibri;
	mso-fareast-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
.MsoPapDefault
	{mso-style-type:export-only;
	margin-bottom:8.0pt;
	line-height:107%;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.0in 1.0in 1.0in;
	mso-header-margin:.5in;
	mso-footer-margin:.5in;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
 /* List Definitions */
 @list l0
	{mso-list-id:1940291302;
	mso-list-type:hybrid;
	mso-list-template-ids:-1546350750 1983823604 67698689 67698693 67698689 67698691 67698693 67698689 67698691 67698693;}
@list l0:level1
	{mso-level-number-format:bullet;
	mso-level-text:\\F076;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	mso-ansi-font-size:11.0pt;
	mso-bidi-font-size:11.0pt;
	font-family:Wingdings;
	letter-spacing:0pt;
	mso-font-width:99%;
	mso-ansi-language:EN-US;
	mso-fareast-language:EN-US;
	mso-bidi-language:AR-SA;
	mso-ansi-font-weight:normal;
	mso-bidi-font-weight:normal;
	mso-ansi-font-style:normal;
	mso-bidi-font-style:normal;}
@list l0:level2
	{mso-level-number-format:bullet;
	mso-level-text:\\F0B7;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Symbol;}
@list l0:level3
	{mso-level-number-format:bullet;
	mso-level-text:\\F0A7;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Wingdings;}
@list l0:level4
	{mso-level-number-format:bullet;
	mso-level-text:\\F0B7;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Symbol;}
@list l0:level5
	{mso-level-number-format:bullet;
	mso-level-text:o;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:"Courier New";}
@list l0:level6
	{mso-level-number-format:bullet;
	mso-level-text:\\F0A7;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Wingdings;}
@list l0:level7
	{mso-level-number-format:bullet;
	mso-level-text:\\F0B7;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Symbol;}
@list l0:level8
	{mso-level-number-format:bullet;
	mso-level-text:o;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:"Courier New";}
@list l0:level9
	{mso-level-number-format:bullet;
	mso-level-text:\\F0A7;
	mso-level-tab-stop:none;
	mso-level-number-position:left;
	text-indent:-.25in;
	font-family:Wingdings;}
ol
	{margin-bottom:0in;}
ul
	{margin-bottom:0in;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin-top:0in;
	mso-para-margin-right:0in;
	mso-para-margin-bottom:8.0pt;
	mso-para-margin-left:0in;
	line-height:107%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Calibri",sans-serif;
	mso-ascii-font-family:Calibri;
	mso-ascii-theme-font:minor-latin;
	mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin;
	mso-bidi-font-family:"Times New Roman";
	mso-bidi-theme-font:minor-bidi;}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="1026"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=EN-US style='tab-interval:.5in;word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoNormal><o:p>&nbsp;</o:p></p>
`

  if (downbool=true){
    document.getElementById("downlod").remove()
    document.getElementById("file").remove()
    downbool=false
  }
  console.log("done with stringing starting up writer")
  var url=writer()
 var file=document.createElement("a");
  file.href=url;
  file.download="output.html"// Changed from test to output
  file.id="file"
  var downlod=document.createElement("button");
  downlod.type="button";
  downlod.innerHTML="Download";
  downlod.id="downlod"
  file.appendChild(downlod)
  document.getElementById("submitb").innerHTML="Resubmit"
  document.getElementById("body").appendChild(file)
  downbool=true
}


