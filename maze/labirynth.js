  function initCanvas(){
    var ctx = document.getElementById('f_window').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var y =0, x=0;
    function Player (){
        this.x = 0, this.y =0,this.w =12, this.h = 12;
        this.render = function(){
            ctx.fillStyle = "orange"
            ctx.fillRect(this.x, this.y,this.w,this.h); 
        }
    }
    function Wall(){
        this.x = 0, this.y =0,this.w =0, this.h = 0;
        this.render = function(){
            ctx.fillStyle = "black"
            ctx.fillRect(0,0,112,16)
            ctx.fillRect(128,0,512,16);
            ctx.fillRect(0,0,16,480);
            ctx.fillRect(624,0,16,480);
            ctx.fillRect(0,464,544,16);
            ctx.fillRect(560,464,80,16);
            ctx.fillRect(96,0,16,64);
            ctx.fillRect(128,0,16,64);
            ctx.fillRect(32,32,48,16);
            ctx.fillRect(64,80,112,16);
            ctx.fillRect(64,32,16,128);
            ctx.fillRect(32,64,16,128);
            ctx.fillRect(32,176,112,16);
            ctx.fillRect(64,144,48,16);
            ctx.fillRect(160,32,144,16);
            ctx.fillRect(160,32,16,64);
            ctx.fillRect(320,32,144,16);
            ctx.fillRect(512,32,128,16);
            ctx.fillRect(480,0,16,80);
            ctx.fillRect(560,32,16,128);
            ctx.fillRect(592,64,16,128);
            ctx.fillRect(416,176,192,16);
            ctx.fillRect(0,208,176,16);
            ctx.fillRect(160,176,16,32);
            ctx.fillRect(128,144,16,32);
            ctx.fillRect(96,112,112,16);
            ctx.fillRect(192,64,16,64);
            ctx.fillRect(192,64,80,16);
            ctx.fillRect(288,32,16,96);
            ctx.fillRect(288,112,48,16);
            ctx.fillRect(128,144,112,16);
            ctx.fillRect(224,96,16,64);
            ctx.fillRect(256,64,16,128);
            ctx.fillRect(160,176,112,16);
            ctx.fillRect(320,32,16,96);
            ctx.fillRect(384,32,16,64);
            ctx.fillRect(448,32,16,64);
            ctx.fillRect(416,64,16,32);
            ctx.fillRect(416,80,48,16);
            ctx.fillRect(256,144,112,16);
            ctx.fillRect(352,64,16,96);
            ctx.fillRect(352,112,160,16);
            ctx.fillRect(496,96,16,32);
            ctx.fillRect(480,64,64,16);
            ctx.fillRect(528,64,16,96);
            ctx.fillRect(384,144,160,16);
            ctx.fillRect(384,144,16,48);
            ctx.fillRect(288,176,112,16);
            ctx.fillRect(288,176,16,48);
            ctx.fillRect(192,208,112,16);
            ctx.fillRect(192,208,16,48);
            ctx.fillRect(128,240,80,16);
            ctx.fillRect(128,240,16,80);
            ctx.fillRect(96,208,16,80);
            ctx.fillRect(32,240,16,208);
            ctx.fillRect(32,240,48,16);
            ctx.fillRect(32,432,224,16);
            ctx.fillRect(64,272,48,16);
            ctx.fillRect(64,272,16,144);
            ctx.fillRect(64,400,176,16);
            ctx.fillRect(160,368,16,48);
            ctx.fillRect(96,304,48,16);
            ctx.fillRect(96,304,16,80);
            ctx.fillRect(224,384,16,32);
            ctx.fillRect(128,336,16,48);
            ctx.fillRect(128,336,80,16);
            ctx.fillRect(192,336,16,48);
            ctx.fillRect(192,352,112,16);
            ctx.fillRect(176,304,16,48);
            ctx.fillRect(176,304,64,16);
            ctx.fillRect(160,272,80,16);
            ctx.fillRect(224,240,16,48);
            ctx.fillRect(224,240,80,16);
            ctx.fillRect(288,240,16,32);
            ctx.fillRect(256,384,16,32);
            ctx.fillRect(272,400,16,80);
            ctx.fillRect(256,272,16,32);
            ctx.fillRect(256,288,128,16);
            ctx.fillRect(224,320,80,16);
            ctx.fillRect(288,368,80,16);
            ctx.fillRect(304,368,16,80);
            ctx.fillRect(304,432,208,16);
            ctx.fillRect(320,208,16,144);
            ctx.fillRect(320,336,32,16);
            ctx.fillRect(320,208,112,16);
            ctx.fillRect(416,176,16,80);
            ctx.fillRect(416,176,192,16);
            ctx.fillRect(368,240,16,80);
            ctx.fillRect(352,240,48,16);
            ctx.fillRect(336,400,16,48);
            ctx.fillRect(336,400,64,16);
            ctx.fillRect(368,336,32,16);
            ctx.fillRect(384,336,16,80);
            ctx.fillRect(400,272,176,16);
            ctx.fillRect(368,304,64,16);
            ctx.fillRect(416,304,16,96);
            ctx.fillRect(416,384,128,16);
            ctx.fillRect(528,384,16,96);
            ctx.fillRect(448,208,16,48);
            ctx.fillRect(448,208,160,16);
            ctx.fillRect(448,240,64,16);
            ctx.fillRect(528,208,16,80);
            ctx.fillRect(448,272,16,96);
            ctx.fillRect(448,352,128,16);
            ctx.fillRect(560,352,16,128);
            ctx.fillRect(496,416,16,32);
            ctx.fillRect(512,336,16,32);
            ctx.fillRect(480,304,16,32);
            ctx.fillRect(480,304,80,16);
            ctx.fillRect(544,320,96,16);
            ctx.fillRect(560,240,48,16);
            ctx.fillRect(592,288,64,16);
            ctx.fillRect(592,240,16,48);
            ctx.fillRect(592,320,16,128);
        }
    }
    function Win(){
    this.x = 0, this.y =0,this.w =0, this.h = 0;
        this.render = function(){
            ctx.fillStyle = "red"
            ctx.fillRect(this.x, this.y,16,16);
        }
    }
    var player = new Player();
    player.x = 114;
    player.y = 2;
    var wall = new Wall();
    var win = new Win();
    win.x = 544;
    win.y = 464;
    function animate(){
        ctx.save();
        ctx.clearRect(0,0,cW,cH);
        win.render();
        player.render();
        wall.render();
        if (player.x > win.x && player.y > win.y )
            {alert("win");
                player.x = 114;
                player.y = 2;
            }
            if(
                player.y<0||
                player.y<16 && player.x<112||
                player.y<16 && player.x>128||
                player.y<48 && player.y>46 && player.x>32-player.w && player.x<80||
                player.y<48 && player.y>46 && player.x>160-player.w && player.x<304||
                player.y<48 && player.y>46 && player.x>320-player.w && player.x<464||
                player.y<48 && player.y>46 && player.x>512-player.w||
                player.y<64 && player.y>62 && player.x>96-player.w && player.x<112||
                player.y<64 && player.y>62 && player.x>128-player.w && player.x<144||
                player.y<80 && player.y>78 && player.x>192-player.w && player.x<272||
                player.y<80 && player.y>78 && player.x>480-player.w && player.x<544||
                player.y<96 && player.y>94 && player.x>64-player.w && player.x<176||
                player.y<96 && player.y>94 && player.x>384-player.w && player.x<400||
                player.y<96 && player.y>94 && player.x>416-player.w && player.x<464||
                player.y<128 && player.y>126 && player.x>96-player.w && player.x<208||
                player.y<128 && player.y>126 && player.x>288-player.w && player.x<336||
                player.y<128 && player.y>126 && player.x>352-player.w && player.x<512||
                player.y<160 && player.y>158 && player.x>64-player.w && player.x<112||
                player.y<160 && player.y>158 && player.x>128-player.w && player.x<240||
                player.y<160 && player.y>158 && player.x>256-player.w && player.x<368||
                player.y<160 && player.y>158 && player.x>384-player.w && player.x<544||
                player.y<160 && player.y>158 && player.x>560-player.w && player.x<576||
                player.y<192 && player.y>190 && player.x>32-player.w && player.x<144||
                player.y<192 && player.y>190 && player.x>160-player.w && player.x<272||
                player.y<192 && player.y>190 && player.x>288-player.w && player.x<400||
                player.y<192 && player.y>190 && player.x>416-player.w && player.x<608||
                player.y<224 && player.y>222 && player.x>0-player.w && player.x<176||
                player.y<224 && player.y>222 && player.x>192-player.w && player.x<304||
                player.y<224 && player.y>222 && player.x>320-player.w && player.x<432||
                player.y<224 && player.y>222 && player.x>448-player.w && player.x<608||
                player.y<256 && player.y>254 && player.x>32-player.w && player.x<80||
                player.y<256 && player.y>254 && player.x>128-player.w && player.x<208||
                player.y<256 && player.y>254 && player.x>224-player.w && player.x<304||
                player.y<256 && player.y>254 && player.x>352-player.w && player.x<400||
                player.y<256 && player.y>254 && player.x>416-player.w && player.x<432||
                player.y<256 && player.y>254 && player.x>448-player.w && player.x<512||
                player.y<256 && player.y>254 && player.x>560-player.w && player.x<608||
                player.y<272 && player.y>270 && player.x>288-player.w && player.x<304||
                player.y<288 && player.y>286 && player.x>64-player.w && player.x<112||
                player.y<288 && player.y>286 && player.x>160-player.w && player.x<240||
                player.y<288 && player.y>286 && player.x>400-player.w && player.x<576||
                player.y<304 && player.y>302 && player.x>256-player.w && player.x<384||
                player.y<304 && player.y>302 && player.x>592-player.w||
                player.y<320 && player.y>318 && player.x>96-player.w && player.x<144||
                player.y<320 && player.y>318 && player.x>176-player.w && player.x<240||
                player.y<320 && player.y>318 && player.x>368-player.w && player.x<432||
                player.y<320 && player.y>318 && player.x>480-player.w && player.x<560||
                player.y<336 && player.y>334 && player.x>224-player.w && player.x<304||
                player.y<336 && player.y>334 && player.x>480-player.w && player.x<496||
                player.y<336 && player.y>334 && player.x>544-player.w||
                player.y<352 && player.y>350 && player.x>128-player.w && player.x<208||
                player.y<352 && player.y>350 && player.x>320-player.w && player.x<352||
                player.y<352 && player.y>350 && player.x>368-player.w && player.x<400||
                player.y<368 && player.y>366 && player.x>192-player.w && player.x<304||
                player.y<368 && player.y>366 && player.x>448-player.w && player.x<576||
                player.y<384 && player.y>382 && player.x>96-player.w && player.x<112||
                player.y<384 && player.y>382 && player.x>128-player.w && player.x<144||
                player.y<384 && player.y>382 && player.x>192-player.w && player.x<208||
                player.y<384 && player.y>382 && player.x>288-player.w && player.x<368||
                player.y<400 && player.y>398 && player.x>416-player.w && player.x<544||
                player.y<416 && player.y>414 && player.x>64-player.w && player.x<240||
                player.y<416 && player.y>414 && player.x>256-player.w && player.x<288||
                player.y<416 && player.y>414 && player.x>336-player.w && player.x<400||
                player.y<448 && player.y>446 && player.x>32-player.w && player.x<256||
                player.y<448 && player.y>446 && player.x>304-player.w && player.x<512||
                player.y<448 && player.y>446 && player.x>592-player.w && player.x<608||
                player.y<80 && player.y>80 && player.x>64-player.w && player.x<176||
                player.y<80 && player.y>80 && player.x>416-player.w && player.x<464
            )
                {
                    player.y+=2;

                }
        if(
                player.y>480-player.h||
                player.y<32 && player.y>32-player.h && player.x>32-player.w && player.x<80||
                player.y<32 && player.y>32-player.h && player.x>160-player.w && player.x<304||
                player.y<32 && player.y>32-player.h && player.x>320-player.w && player.x<464||
                player.y<32 && player.y>32-player.h && player.x>512-player.w||
                player.y<64 && player.y>64-player.h && player.x>32-player.w && player.x<48||
                player.y<64 && player.y>64-player.h && player.x>192-player.w && player.x<272||
                player.y<64 && player.y>64-player.h && player.x>352-player.w && player.x<368||
                player.y<64 && player.y>64-player.h && player.x>416-player.w && player.x<432||
                player.y<64 && player.y>64-player.h && player.x>480-player.w && player.x<544||
                player.y<64 && player.y>64-player.h && player.x>592-player.w && player.x<608||
                player.y<80 && player.y>80-player.h && player.x>64-player.w && player.x<176||
                player.y<80 && player.y>80-player.h && player.x>416-player.w && player.x<464||
                player.y<96 && player.y>96-player.h && player.x>224-player.w && player.x<240||
                player.y<96 && player.y>96-player.h && player.x>496-player.w && player.x<512||
                player.y<112 && player.y>112-player.h && player.x>96-player.w && player.x<208||
                player.y<112 && player.y>112-player.h && player.x>288-player.w && player.x<336||
                player.y<112 && player.y>112-player.h && player.x>352-player.w && player.x<512||
                player.y<144 && player.y>144-player.h && player.x>64-player.w && player.x<112||
                player.y<144 && player.y>144-player.h && player.x>128-player.w && player.x<240||
                player.y<144 && player.y>144-player.h && player.x>256-player.w && player.x<368||
                player.y<144 && player.y>144-player.h && player.x>384-player.w && player.x<544||
                player.y<176 && player.y>176-player.h && player.x>32-player.w && player.x<144||
                player.y<176 && player.y>176-player.h && player.x>160-player.w && player.x<272||
                player.y<176 && player.y>176-player.h && player.x>288-player.w && player.x<400||
                player.y<176 && player.y>176-player.h && player.x>416-player.w && player.x<608||
                player.y<208 && player.y>208-player.h && player.x>0-player.w && player.x<176||
                player.y<208 && player.y>208-player.h && player.x>192-player.w && player.x<304||
                player.y<208 && player.y>208-player.h && player.x>320-player.w && player.x<432||
                player.y<208 && player.y>208-player.h && player.x>448-player.w && player.x<608||
                player.y<240 && player.y>240-player.h && player.x>128-player.w && player.x<208||
                player.y<240 && player.y>240-player.h && player.x>32-player.w && player.x<80||
                player.y<240 && player.y>240-player.h && player.x>224-player.w && player.x<304||
                player.y<240 && player.y>240-player.h && player.x>352-player.w && player.x<400||
                player.y<240 && player.y>240-player.h && player.x>448-player.w && player.x<512||
                player.y<240 && player.y>240-player.h && player.x>560-player.w && player.x<608||
                player.y<272 && player.y>272-player.h && player.x>64-player.w && player.x<112||
                player.y<272 && player.y>272-player.h && player.x>160-player.w && player.x<240||
                player.y<272 && player.y>272-player.h && player.x>256-player.w && player.x<272||
                player.y<272 && player.y>272-player.h && player.x>400-player.w && player.x<576||
                player.y<288 && player.y>288-player.h && player.x>256-player.w && player.x<384||
                player.y<288 && player.y>288-player.h && player.x>592-player.w||
                player.y<304 && player.y>304-player.h && player.x>96-player.w && player.x<144||
                player.y<304 && player.y>304-player.h && player.x>176-player.w && player.x<240||
                player.y<304 && player.y>304-player.h && player.x>368-player.w && player.x<432||
                player.y<304 && player.y>304-player.h && player.x>480-player.w && player.x<560||
                player.y<320 && player.y>320-player.h && player.x>224-player.w && player.x<304||
                player.y<320 && player.y>320-player.h && player.x>544-player.w||
                player.y<336 && player.y>336-player.h && player.x>128-player.w && player.x<208||
                player.y<336 && player.y>336-player.h && player.x>320-player.w && player.x<352||
                player.y<336 && player.y>336-player.h && player.x>368-player.w && player.x<400||
                player.y<336 && player.y>336-player.h && player.x>512-player.w && player.x<528||
                player.y<352 && player.y>352-player.h && player.x>192-player.w && player.x<304||
                player.y<352 && player.y>352-player.h && player.x>448-player.w && player.x<576||
                player.y<368 && player.y>368-player.h && player.x>288-player.w && player.x<368||
                player.y<368 && player.y>368-player.h && player.x>160-player.w && player.x<176||
                player.y<384 && player.y>384-player.h && player.x>224-player.w && player.x<240||
                player.y<384 && player.y>384-player.h && player.x>256-player.w && player.x<272||
                player.y<384 && player.y>384-player.h && player.x>416-player.w && player.x<544||
                player.y<400 && player.y>400-player.h && player.x>64-player.w && player.x<240||
                player.y<400 && player.y>400-player.h && player.x>256-player.w && player.x<288||
                player.y<400 && player.y>400-player.h && player.x>336-player.w && player.x<400||
                player.y<416 && player.y>416-player.h && player.x>496-player.w && player.x<512||
                player.y<432 && player.y>432-player.h && player.x>32-player.w && player.x<256||
                player.y<432 && player.y>432-player.h && player.x>304-player.w && player.x<512||
                player.y<464 && player.y>464-player.h && player.x>0-player.w && player.x<544||
                player.y<464 && player.y>464-player.h && player.x>560-player.w)
            {
                player.y-=2;
            }
        if(
                player.x<16||
                player.y>64-player.h && player.y<192&& player.x<48 && player.x>46||
                player.y>240-player.h && player.y<448&& player.x<48 && player.x>46||
                player.y>32-player.h && player.y<160&& player.x<80 && player.x>78||
                player.y>240-player.h && player.y<256&& player.x<80 && player.x>78||
                player.y>272-player.h && player.y<416&& player.x<80 && player.x>78||
                player.y>0-player.h && player.y<64&& player.x<112 && player.x>110||
                player.y>144-player.h && player.y<160&& player.x<112 && player.x>110||
                player.y>208-player.h && player.y<288&& player.x<112 && player.x>110||
                player.y>304-player.h && player.y<384&& player.x<112 && player.x>110||
                player.y>0-player.h && player.y<64&& player.x<144 && player.x>142||
                player.y>144-player.h && player.y<192&& player.x<144 && player.x>142||
                player.y>240-player.h && player.y<320&& player.x<144 && player.x>142||
                player.y>336-player.h && player.y<384&& player.x<144 && player.x>142||
                player.y>32-player.h && player.y<96&& player.x<176 && player.x>174||
                player.y>176-player.h && player.y<224&& player.x<176 && player.x>174||
                player.y>368-player.h && player.y<416&& player.x<176 && player.x>174||
                player.y>304-player.h && player.y<352&& player.x<192 && player.x>190||
                player.y>64-player.h && player.y<128&& player.x<208 && player.x>206||
                player.y>208-player.h && player.y<256&& player.x<208 && player.x>206||
                player.y>336-player.h && player.y<384&& player.x<208 && player.x>206||
                player.y>96-player.h && player.y<160&& player.x<240 && player.x>238||
                player.y>240-player.h && player.y<288&& player.x<240 && player.x>238||
                player.y>304-player.h && player.y<336&& player.x<240 && player.x>238||
                player.y>384-player.h && player.y<416&& player.x<240 && player.x>238||
                player.y>432-player.h && player.y<448&& player.x<256 && player.x>254||
                player.y>64-player.h && player.y<192&& player.x<272 && player.x>270||
                player.y>272-player.h && player.y<304&& player.x<272 && player.x>270||
                player.y>384-player.h && player.y<416&& player.x<272 && player.x>270||
                player.y>448-player.h&& player.x<288 && player.x>286||
                player.y>32-player.h && player.y<128&& player.x<304 && player.x>302||
                player.y>176-player.h && player.y<208&& player.x<304 && player.x>302||
                player.y>240-player.h && player.y<272&& player.x<304 && player.x>302||
                player.y>320-player.h && player.y<336&& player.x<304 && player.x>302||
                player.y>352-player.h && player.y<384&& player.x<304 && player.x>302||
                player.y>368-player.h && player.y<448&& player.x<320 && player.x>318||
                player.y>32-player.h && player.y<128&& player.x<336 && player.x>334||
                player.y>208-player.h && player.y<352&& player.x<336 && player.x>334||
                player.y>336-player.h && player.y<352&& player.x<352 && player.x>350||
                player.y>400-player.h && player.y<448&& player.x<352 && player.x>350||
                player.y>64-player.h && player.y<160&& player.x<368 && player.x>366||
                player.y>368-player.h && player.y<384&& player.x<368 && player.x>366||
                player.y>240-player.h && player.y<320&& player.x<384 && player.x>382||
                player.y>32-player.h && player.y<96&& player.x<400 && player.x>398||
                player.y>144-player.h && player.y<192& player.x<400 && player.x>398||
                player.y>240-player.h && player.y<256&& player.x<400 && player.x>398||
                player.y>336-player.h && player.y<416&& player.x<400 && player.x>398||
                player.y>64-player.h && player.y<96&& player.x<432 && player.x>430||
                player.y>176-player.h && player.y<256&& player.x<432 && player.x>430||
                player.y>304-player.h && player.y<400&& player.x<432 && player.x>430||
                player.y>32-player.h && player.y<96&& player.x<464 && player.x>462||
                player.y>208-player.h && player.y<256&& player.x<464 && player.x>462||
                player.y>272-player.h && player.y<368&& player.x<464 && player.x>462||
                player.y<80&& player.x<496 && player.x>494||
                player.y>304-player.h && player.y<336&& player.x<496 && player.x>494||
                player.y>96-player.h && player.y<128&& player.x<512 && player.x>510||
                player.y>240-player.h && player.y<256&& player.x<512 && player.x>510||
                player.y>416-player.h && player.y<448&& player.x<512 && player.x>510||
                player.y>336-player.h && player.y<368&& player.x<528 && player.x>526||
                player.y>64-player.h && player.y<160&& player.x<544 && player.x>542||
                player.y>208-player.h && player.y<288&& player.x<544 && player.x>542||
                player.y>384-player.h&& player.x<544 && player.x>542||
                player.y>304-player.h && player.y<336&& player.x<560 && player.x>558||
                player.y>32-player.h && player.y<160&& player.x<576 && player.x>574||
                player.y>272-player.h && player.y<288&& player.x<576 && player.x>574||
                player.y>352-player.h&& player.x<576 && player.x>574||
                player.y>64-player.h && player.y<192&& player.x<608 && player.x>606||
                player.y>208-player.h && player.y<224&& player.x<608 && player.x>606||
                player.y>240-player.h && player.y<304&& player.x<608 && player.x>606||
                player.y>320-player.h && player.y<448&& player.x<608 && player.x>606
        )
            {
                player.x+=2;
            }
        if(
                player.x>640-(16+player.w)||
                player.y>32-player.h && player.y<48&& player.x<32 && player.x>32-player.w||
                player.y>64-player.h && player.y<192&& player.x<32 && player.x>32-player.w||
                player.y>240-player.h && player.y<448&& player.x<32 && player.x>32-player.w||
                player.y>32-player.h && player.y<160&& player.x<64 && player.x>64-player.w||
                player.y>272-player.h && player.y<416&& player.x<64 && player.x>64-player.w||
                player.y>0-player.h && player.y<64&& player.x<96 && player.x>96-player.w||
                player.y>112-player.h && player.y<128&& player.x<96 && player.x>96-player.w||
                player.y>208-player.h && player.y<288&& player.x<96 && player.x>96-player.w||
                player.y>304-player.h && player.y<384&& player.x<96 && player.x>96-player.w||
                player.y>0-player.h && player.y<64&& player.x<128 && player.x>128-player.w||
                player.y>144-player.h && player.y<192&& player.x<128 && player.x>128-player.w||
                player.y>240-player.h && player.y<320&& player.x<128 && player.x>128-player.w||
                player.y>336-player.h && player.y<384&& player.x<128 && player.x>128-player.w||
                player.y>32-player.h && player.y<96&& player.x<160 && player.x>160-player.w||
                player.y>176-player.h && player.y<224&& player.x<160 && player.x>160-player.w||
                player.y>272-player.h && player.y<288&& player.x<160 && player.x>160-player.w||
                player.y>368-player.h && player.y<416&& player.x<160 && player.x>160-player.w||
                player.y>304-player.h && player.y<352&& player.x<176 && player.x>176-player.w||
                player.y>64-player.h && player.y<128&& player.x<192 && player.x>192-player.w||
                player.y>208-player.h && player.y<256&& player.x<192 && player.x>192-player.w||
                player.y>336-player.h && player.y<384&& player.x<192 && player.x>192-player.w||
                player.y>96-player.h && player.y<160&& player.x<224 && player.x>224-player.w||
                player.y>240-player.h && player.y<288&& player.x<224 && player.x>224-player.w||
                player.y>304-player.h && player.y<336&& player.x<224 && player.x>224-player.w||
                player.y>384-player.h && player.y<416&& player.x<224 && player.x>224-player.w||
                player.y>64-player.h && player.y<192&& player.x<256 && player.x>256-player.w||
                player.y>272-player.h && player.y<304&& player.x<256 && player.x>256-player.w||
                player.y>384-player.h && player.y<416&& player.x<256 && player.x>256-player.w||
                player.y>32-player.h && player.y<128&& player.x<288 && player.x>288-player.w||
                player.y>176-player.h && player.y<208&& player.x<288 && player.x>288-player.w||
                player.y>240-player.h && player.y<272&& player.x<288 && player.x>288-player.w||
                player.y>352-player.h && player.y<384&& player.x<288 && player.x>288-player.w||
                player.y>368-player.h && player.y<448&& player.x<304 && player.x>304-player.w||            
                player.y>32-player.h && player.y<128&& player.x<320 && player.x>320-player.w||
                player.y>208-player.h && player.y<352&& player.x<320 && player.x>320-player.w||
                player.y>400-player.h && player.y<448&& player.x<336 && player.x>336-player.w||
                player.y>64-player.h && player.y<160&& player.x<352 && player.x>352-player.w||
                player.y>240-player.h && player.y<256&& player.x<352 && player.x>352-player.w||
                player.y>240-player.h && player.y<320&& player.x<368 && player.x>368-player.w||
                player.y>336-player.h && player.y<352&& player.x<368 && player.x>368-player.w||
                player.y>32-player.h && player.y<96&& player.x<384 && player.x>384-player.w||
                player.y>144-player.h && player.y<192& player.x<384 && player.x>384-player.w||
                player.y>336-player.h && player.y<416&& player.x<384 && player.x>384-player.w||
                player.y>272-player.h && player.y<288&& player.x<400 && player.x>400-player.w||
                player.y>64-player.h && player.y<96&& player.x<416 && player.x>416-player.w||
                player.y>176-player.h && player.y<256&& player.x<416 && player.x>416-player.w||
                player.y>304-player.h && player.y<400&& player.x<416 && player.x>416-player.w||
                player.y>32-player.h && player.y<96&& player.x<448 && player.x>448-player.w||
                player.y>208-player.h && player.y<256&& player.x<448 && player.x>448-player.w||
                player.y>272-player.h && player.y<368&& player.x<448 && player.x>448-player.w||
                player.y<80&& player.x<480 && player.x>480-player.w||
                player.y>304-player.h && player.y<336&& player.x<480 && player.x>480-player.w||
                player.y>96-player.h && player.y<128&& player.x<496 && player.x>496-player.w||
                player.y>416-player.h && player.y<448&& player.x<496 && player.x>496-player.w||
                player.y>336-player.h && player.y<368&& player.x<512 && player.x>512-player.w||
                player.y>32-player.h && player.y<48&& player.x<512 && player.x>512-player.w||
                player.y>64-player.h && player.y<160&& player.x<528 && player.x>528-player.w||
                player.y>208-player.h && player.y<288&& player.x<528 && player.x>528-player.w||
                player.y>384-player.h&& player.x<528 && player.x>528-player.w||
                player.y>304-player.h && player.y<336&& player.x<544 && player.x>544-player.w||
                player.y>32-player.h && player.y<160&& player.x<560 && player.x>560-player.w||
                player.y>240-player.h && player.y<256&& player.x<560 && player.x>560-player.w||
                player.y>352-player.h&& player.x<560 && player.x>560-player.w||
                player.y>64-player.h && player.y<192&& player.x<592 && player.x>592-player.w||
                player.y>208-player.h && player.y<224&& player.x<592 && player.x>592-player.w||
                player.y>240-player.h && player.y<304&& player.x<595 && player.x>592-player.w||
                player.y>320-player.h && player.y<448&& player.x<592 && player.x>592-player.w
        )
            {
                
                player.x-=2;
            }
        ctx.restore();
    }
    
var animateInterval = setInterval(animate, 15);
//poruszanie klawiszami
document.addEventListener('keydown', function(event){
    var key_press = String.fromCharCode(event.keyCode);    
    if(key_press =="W"){
        player.y-=1;
    } else if(key_press =="S"){
        player.y+=1;
    } else if(key_press =="A"){
        player.x-=1;
    } else if(key_press =="D"){
        player.x+=1;
    };
});
}
window.addEventListener('load', function(event){})
initCanvas();