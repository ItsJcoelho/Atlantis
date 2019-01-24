<template>
  <div class="login">
    <!-- NAVBAR -->
    <navBar/>
    <br>
    <div class="imagem">
            <br>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9CwPs5vvuO1/2e3v1nyfxNxPvh8/675/3l9v5wz/w2vfun4f2n3v2x5f1vzPz4/f+d2/3u+f9/0vyt5P3D7P2Q2fzW8v7r+P70/P+46P3L7/5Sxfua3f3d9P6j4f2F1vwsKOItAAAHvklEQVR4nO2d63qqOhBAmyiUm4iiIAWV93/KA7pP281ggclkkuyy/uoXWYC5TiZvb2iy6nh5L+vzOehJe07JN+7bae7JBOkEdYUX+Jmq/MgbGQ+R1IBfGP6gl5Q6JMOg9WMprED6m/pI7HcMcmGJ3gPpt2fS51jmvk1+PbK53ugEU882vwdRTeSXbX3TLi/wAxLBS2vlA3wgUwrBjb2CHeqK1dVqQYIX9WRaYQpPsbopba1kPpHRu5Lh3u539MFWpem3/h3t8RXe09AzffVzkBH+IW5NX/w85Bn9CPfjBRpl7IKiDGkYjFakTZS3m03RcXiy3alzGKOAHPLRe17iBKuR3kw3+qzDy7GqqizD3rjZZCOEuwZeVbzF/cANNhUyL7V7TZDVIy3YHlfWGd6rVtsUyQJuOVQMUSWlw4KkZ/oBPqkbYIj6I2Y7cKuQf2hyTqAKRLUX2WFgiK+UqbmAZgxlWAHDK/WVotkMDVFjqKoYGMYJ9YWiAYYfmFKOw+YwppgyoAEYoi4NGtLM+1AADE+YUo7DGagY3cElR5ch1fSkOsDwjikFzCLabIjqmF6GnaPYlgZ/NZzLbzRUm7ajBBiiulvhamgQYFhgSvmFhnI15IPIMFoNzQEMW0wpq6FJVsN5rIYmWQ3n4ZRhjillNTTJajiP1dAkv9AwwpQy2/DIv/TNaVh95Pt9QRhxPQtGw1v+CCDaM0+l8hmGUfz8yA9YV8D5DIOvr5w4/41shtm3hXB5oN7F8gNshtX3r8iWr75hNPzr84itvmEzvAyCk/Zc6+BshuEw/KphCmYAhqjQvTmGMAA1YWk12AzfoaEsOFoNk4YiznGRkIugMvx7A2wMV9duUJCnSqUxPKZ/71DebUGTPmrIUaXSGMIwa/CNF4bC091LJTKc5pWh8DWHMbIZlq93RaEW9GZjg2Ec6eyI8xnGLw27KlVjR9wKw+5X9UX6WWKosUplM6x/NpTNSZOiLYZdq1HoUbTHEDlwmwQYelp+5u3tPG0Y73V0xNkMg2lDoWUu1SpDIb0z+Z/RLsOuSk2pR8Vshuksw05xS/wU2Qw/5hkKZKzEa5CG/RCwqi494a2jfFI/OD/4eJCeepL7fWQz56vHmJO+qIsNb0kbeY0vJtNsDbN7zRXsq1TKjvhCw+zEkcRLqiYhUTBkSn4hCTviywzhlm1dinQd8UWGGWMeL/9ApLjIsGTz69nQVKmLDJlT0NDMiC8yvPIa0nTEFxm2vIZ9R5zZcDQdilbFRr3VsNtQSD9RrW8WGUZjF6Gbg6Ki/YZic+EzHM8FpZ1cqSPugqFQWkd1wlA2Cq3GIkNjSeekn6JbDTcMO3ZYRWcMBTbazx1DscF1xB0yRLYaLhkK1AyVU4ayQcxQOWXYx4j/44Ydi4dTzhmKpS+qa4ayWNosOmYor4tHi24ZSkRYsVOGPmaI4ZIhbubNIUPkIRzOGErsXIYrhrLFTvE7Yiiv6Ak3J+ZphFCYF3bCsMHP0rhhqLY+Y7+hVIwftn5WH91KoAz5156ERM4/uWN4UFuWWWrIvQas1EqgDAtePemjkourGCa8ghSr+AsNa1ZBopDoRYYVPCxCn6BqK4EyfEv4or6UWwmcITgDQRvqrQTOsD8igMNRPcYEbfhWBXkjMMf8LvCTPuXZEZg476y6hH1M92c49+nJvefa8zxSqu3JH0TR/NEzav2F1hDFvP0WjyugzaJl234LqpjLL6x7hgX17i7LDH2YqkAVuwwVwmZeYtP+Q4k7bGoCNsPpPaSy0ZLpxCLDSE8qF3v2AaOn7SewZT++f9WVOcISw4awqz3Ahswffd4vfUlqbDCUvs5cShYYSk9rPizzOYZETjacH8W4ob84BGghNIZVHQwAVeP7uGCT6E70qSdfmxzJSDcuqD8frdGce7Kp9adONJkZUjYceVrZDIf5S/v8VwxZExkNj8BQdyX6Bz7DwXSihvmKccxkSlYMIFkEn+H31B8Uu1/nYiafd8OYeZ4xJ/vXhxHn2RB8hp8rc5Ijt+4XjGcjVEU/YSjE8mB0JTjPt8iCTd5u2CrRPzCfUWKA1XAeThn++2cFrYajrIYmWQ3nsRqaBBi2mFJWQ5OshvNYDU3yCw1Rx2mEwxy6qyEjmgzhaUjGWA3n4ZThFVPK5Rcacp+J+xpdhsxH4v4AMNxiSvmNhvpON1oKjeGxdcjwjikFGnKdozoNMDxhSoGGTMeozoDIcOOQIWrbWAUMUTdKC0SGh+HYAlVhaQEYol4vaJgzr4O+pAKpLlCG2Q5EALOu1f9AAOLpcNU82AItUTPL9Lzvwb3HNdXBsJiurrHhPQWVfAduUFCObILdmn9Rb6CaEaLBFTV2r0QehEafYxYMpwD7vw/25Np0JARY+FFx2O12SZL+zzAcfBHpQgp/5LZLbI/5Npph6fs+dV8XYz/8Gg/9WjFndsEi8Vv9S8asIHikpxC3e+XLCqKAyogABnJbyEYp9PrD9OVPIj216aOMLbULFuXYazAfZRuILMQDbrCbaxGS4tDo0mLFuCXpQoYG0vLNBNsfHXIZ7Qyap0mIBPsOvX1vqhQ56Qz1beexpMuai5T7hHiompW7yBrHzu90ox+mZuG5aGYmAdPGIw2ZzmF4FdZpsjVHckqD+nac0vsP/gCzev32ep8AAAAASUVORK5CYII=" class="inside" alt="...">
            <br>
            <br>
    </div>
    <br>
    <h1>Login Page</h1>
    <div class="container">
        <br>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputEmail">Email address</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
        </div>
        <br>
        <div class="row justify-content-center">
            <div class="col-4">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="pass">
            </div>
        </div>
        <br>
        <button type="button" class="btn btn-dark btn-lg" v-on:click="login()">Entrar</button>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar.vue";
export default {
  data: function() {
    return {
        email: "",
        pass: "",
    };
  },
  components: {
      navBar
  },
  methods: {
      //função para logar 
      login() {
          let userObject = {
              email: this.email,
              pass: this.pass,
          }
          let loginConfirm = this.$store.getters.login(userObject)
          console.log(loginConfirm)
          if(loginConfirm.idUser != 0){
              alert("Bem-vindo")
              this.$store.dispatch("set_user_info",loginConfirm)
              this.$router.push({name: "home"})
          }
          else{
              alert("error")
          }
      }
  }
};
</script>