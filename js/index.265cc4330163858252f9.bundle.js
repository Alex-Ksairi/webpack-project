(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[826],{744:()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}var e=document.querySelector("#root");e.insertAdjacentHTML("beforeend",'\n        <div class="cart">\n           <i class="fas fa-cart-plus"></i>\n           <span>0</span>\n        </div>\n    '),fetch("https://fakestoreapi.com/products").then((function(t){return t.json()})).then((function(t){return t})).then((function(n){var c,a=function(e){if(Array.isArray(e))return t(e)}(c=new Set(n.map((function(t){return t.category}))))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(c)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(e,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=a.pop();a.splice(1,0,r),a.forEach((function(t){var c=document.createElement("div");c.className="categories";var a=document.createElement("h2");a.innerText=t,c.appendChild(a);var r=document.createElement("div");r.className="product",n.filter((function(e){return e.category===t})).forEach((function(t){var e,n,c,a,o;r.insertAdjacentHTML("beforeend",(n=(e=t).id,c=e.image,a=e.title,o=e.price,'\n            <div class="product__card">\n            <img src='.concat(c,' alt="product').concat(n,'">\n            <div>\n                <h3>').concat(a,"</h3>\n                <p>").concat(o,'$</p>\n                <button class="addbutton" data-id=').concat(n,'>Add to Cart</button>\n            </div>\n            <div class="icons" >\n                <i class="far fa-eye" data-id=').concat(n,"></i>\n            </div>\n\n        </div>\n    ")))})),c.appendChild(r),e.appendChild(c)})),document.querySelectorAll("i.far").forEach((function(t){return t.addEventListener("click",(function(t){var c,a,r,o,i,s,d,l=t.target.dataset.id,u=n.find((function(t){return t.id==l}));e.insertAdjacentHTML("beforeend",(a=(c=u).id,r=c.image,o=c.title,i=c.category,s=c.price,d=c.description,'\n            <section id="myModal" class="modal">\n            <section class="modal__content">\n             <span class="close">&times;</span>\n                <div class="image">\n                    <img src='.concat(r,' alt="product').concat(a,'">\n                </div>\n                <div class="details">\n                    <h3>').concat(o,"</h3>\n                    <p><b>Category :</b> ").concat(i," </p>\n                    <p><b>Price :</b> ").concat(s,"$ </p>\n                    <p><b>Description :</b> ").concat(d,' </p>\n                    <button class="add_cart">Add to Cart</button>\n                </div>\n            </section>\n        </section>\n    ')));var p=document.querySelector(".modal");p.style.display="block",p.addEventListener("click",(function(t){switch(t.target.className){case"close":case"modal":p.style.display="none",e.removeChild(t.currentTarget)}}))}))}));var o=[];document.querySelectorAll(".addbutton").forEach((function(t){t.addEventListener("click",(function(e){if("Added"!=t.innerText){var c=e.target.dataset.id,a=n.find((function(t){return t.id==c}));o.push(a),o.length&&(document.querySelector(".cart").style.display="block",document.querySelector(".cart > span").innerText=o.length),t.innerText="Added",t.style.backgroundColor="black",t.style.color="white",t.style.border="none"}else alert("Your chosen item is already waiting in the basket room!")}))})),document.querySelector(".cart").addEventListener("click",(function(t){var n;e.insertAdjacentHTML("beforeend",(n="",o.forEach((function(t){var e=t.id,c=t.title,a=t.image,r=t.price;n+='\n            <div class="modal_item">\n                <div class="image">\n                    <img src='.concat(a,' alt="product').concat(e,'">\n                </div>\n                <div class="details">\n                    <h3>').concat(c,"</h3>\n                    <p><b>Price :</b> ").concat(r,'$ </p>\n                </div>\n                <i class="fas fa-trash-alt"></i>\n            </div>\n        ')})),'\n        <div class="cart_modal">\n            <div class="cart_modal__content">\n                <span class="close">&times;</span>\n                '.concat(n,"\n            </div>\n        </div>\n    ")));var c=document.querySelector(".cart_modal");c.style.display="block",c.addEventListener("click",(function(t){switch(t.target.className){case"close":case"cart_modal":c.style.display="none",e.removeChild(t.currentTarget)}}))}))}))}},t=>{"use strict";t(t.s=744)}]);