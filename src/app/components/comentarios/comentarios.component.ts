import { Component } from '@angular/core';
import { TestimoniosComponent } from '../testimonios/testimonios.component';

@Component({
  selector: 'app-comentarios',
  imports: [TestimoniosComponent],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.scss'
})
export class ComentariosComponent {
  public testimonios = [
    {
      mensaje: "The @10x_designers membership is the most valuable subscription I have...",
      imagen: "https://framerusercontent.com/images/KqFiAvbOuSRMMuldLZytEfAs.jpeg",
      nombre: "Meta Mae",
      usuario: "@metaversemae"
    },
    {
      mensaje: "Best design community I've been a part of is @10x_designers...",
      imagen: "https://framerusercontent.com/images/3fX8RqOTP5iJD4h8HC96g1ZPWL8.jpeg",
      nombre: "Denislav Jeliazkov",
      usuario: "@DenisJeliazkov"
    },
    {
      mensaje: "I've been interacting with some folks who just joined the awesome @10x_designers community...",
      imagen: "https://framerusercontent.com/images/lZtHfJEX2JQLTKXKvZ2buEoKtQ.png",
      nombre: "Parvèz Shaikh",
      usuario: "@parvez_design"
    },
    {
      mensaje: "Thanks for this great community @FonsMans! You've brought together so many inspiring professionals!",
      imagen: "https://framerusercontent.com/images/nyz94Xew02tj5ufQVkrk7sebPw.jpeg",
      nombre: "Krisztina Szerovay",
      usuario: "@krisztaszerovay"
    },
    {
      mensaje: "Every designer should be in the @10x_designers community. It is my weapon against creative block...",
      imagen: "https://framerusercontent.com/images/Dmusscs2YxQERBIKhZKlwPNAQbA.jpeg",
      nombre: "Shannon Trimble",
      usuario: "@shanntrimble"
    },
    {
      mensaje: "'I've spent a lot of time lately on @10x_designers and I'm so happy to have joined! If you're interested in design this is the place to be. @FonsMans and friends are constantly sharing knowledge. Loom vids abound. 😀 So much value. Couldn't be happier to be in this community.",
      imagen: "https://framerusercontent.com/images/Mo7sJqwQBEG7dSCPkAFIcxI3rY.png",
      nombre: "Mike",
      usuario: "@learnactrepeat"
    },
    {
      mensaje: "Always excited for communities that share practical design knowledge with each other. Happy to be a part of this.",
      imagen: "https://framerusercontent.com/images/R1cxXqlnfSPvyNMiKHix8gTPI.jpeg",
      nombre: "Anthony Hobday",
      usuario: "@hobdaydesign"
    },
    {
      mensaje: "If you ever feel like you want to evolve in your design skills and become the best version of a designer you're, then join @10x_designers and be the designer you always wanted to be :)",
      imagen: "https://framerusercontent.com/images/HGOBUhatcjWutE7NSAbOQ3oyNBI.jpeg",
      nombre: "Ahmed Al-kheerow",
      usuario: "@alkheerow"
    },
    {
      mensaje: "This is just scratching the surface. @10x_designers is quickly growing with TONS of talented people ready to help you with whatever design questions you may have, workshops, tutorials, and just incredible people to chat and network with.",
      imagen: "https://framerusercontent.com/images/bs2mkPrXADwlnNhpnUAriWOnt7I.jpeg",
      nombre: "Rob",
      usuario: "@robably__"
    },
    {
      mensaje: "I joined the @10x_designers community about a month ago and my design quality has skyrocketed.",
      imagen: "https://framerusercontent.com/images/cIxp8e2uLjR85RkeAF22Sk2Rhg.jpeg",
      nombre: "Jefe",
      usuario: "@uxerntfound"
    },
    {
      mensaje: "Why bother with the hassle of going out on a Friday night when you can stay in and level up your visual game with a masterclass by @10x_designers 😎 Thanks @FonsMans for an insightful session! Loved every bit of it! 😁✨🫶🏼",
      imagen: "https://framerusercontent.com/images/zaoFYsiJGJ661Bgf1xO5G6sO6s.jpeg",
      nombre: "Sushen Wakankar",
      usuario: "@sushenw"
    },
    {
      mensaje: "huuuugeee! Congrats Fons! Any designer is lucky to be a part of this 🎉",
      imagen: "https://framerusercontent.com/images/3miGzVgb6t0QObPc2Mt0HtjcAZ8.jpeg",
      nombre: "femke",
      usuario: "@femkesvs"
    },
    {
      mensaje: "Joining the @10x_designers community has been a game-changer for me! The talent, collaboration, and learning opportunities are unparalleled. Highly recommended! Thanks again @FonsMans for starting this movement 🔥",
      imagen: "https://framerusercontent.com/images/gvUo3I07ZckUJoTSWScVbVL8GU0.jpeg",
      nombre: "Allan Floury",
      usuario: "@AllanFloury"
    },
    {
      mensaje: "Huge thanks to the @10x_designers community and @FonsMans for having me today! — Had a blast teaching how we make @Threads character avatars and also made this 10x Designers logo graphic in just 10 minutes.",
      imagen: "https://framerusercontent.com/images/XtgbLKTx8lMuYW4O8ANvtXSIAc.png",
      nombre: "Tim Quirino",
      usuario: "@timquirino"
    },

  ];
}
