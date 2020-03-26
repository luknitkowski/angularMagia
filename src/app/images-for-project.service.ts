import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesForProjectService {
  private first = [
    `../../assets/project-images/first/1-min.jpg`,
    `../../assets/project-images/first/2-min.jpg`,
    `../../assets/project-images/first/3-min.jpg`,
    `../../assets/project-images/first/4-min.jpg`,
    `../../assets/project-images/first/5-min.jpg`,
    `../../assets/project-images/first/6-min.jpg`,
    `../../assets/project-images/first/7-min.jpg`,
    `../../assets/project-images/first/8-min.jpg`,
    `../../assets/project-images/first/9-min.jpg`
  ];
  private second = [
    `../../assets/project-images/second/1-min.jpg`,
    `../../assets/project-images/second/2-min.jpg`,
    `../../assets/project-images/second/3-min.jpg`,
    `../../assets/project-images/second/4-min.jpg`,
    `../../assets/project-images/second/5-min.jpg`,
    `../../assets/project-images/second/6-min.jpg`,
    `../../assets/project-images/second/7-min.jpg`,
    `../../assets/project-images/second/8-min.jpg`,
    `../../assets/project-images/second/9-min.jpg`,
    `../../assets/project-images/second/10-min.jpg`,
    `../../assets/project-images/second/11-min.jpg`,
    `../../assets/project-images/second/12-min.jpg`
  ];
  private third = [
    `../../assets/project-images/third/1-min.jpg`,
    `../../assets/project-images/third/2-min.jpg`,
    `../../assets/project-images/third/3-min.jpg`,
    `../../assets/project-images/third/4-min.jpg`,
    `../../assets/project-images/third/5-min.jpg`,
    `../../assets/project-images/third/6-min.jpg`,
    `../../assets/project-images/third/7-min.jpg`,
    `../../assets/project-images/third/8-min.jpg`,
    `../../assets/project-images/third/9-min.jpg`
  ];
  private fourth = [
    `../../assets/project-images/fourth/1-min.jpg`,
    `../../assets/project-images/fourth/2-min.jpg`,
    `../../assets/project-images/fourth/3-min.jpg`,
    `../../assets/project-images/fourth/4-min.jpg`,
    `../../assets/project-images/fourth/5-min.jpg`,
    `../../assets/project-images/fourth/6-min.jpg`,
    `../../assets/project-images/fourth/7-min.jpg`,
    `../../assets/project-images/fourth/8-min.jpg`,
    `../../assets/project-images/fourth/9-min.jpg`,
    `../../assets/project-images/fourth/10-min.jpg`,
    `../../assets/project-images/fourth/11-min.jpg`
  ];
  private fifth = [
    `../../assets/project-images/fifth/1-min.jpg`,
    `../../assets/project-images/fifth/2-min.jpg`,
    `../../assets/project-images/fifth/3-min.jpg`,
    `../../assets/project-images/fifth/4-min.jpg`,
    `../../assets/project-images/fifth/5-min.jpg`,
    `../../assets/project-images/fifth/6-min.jpg`,
    `../../assets/project-images/fifth/7-min.jpg`,
    `../../assets/project-images/fifth/8-min.jpg`
  ];
  private sixth = [
    `../../assets/project-images/sixth/1-min.jpg`,
    `../../assets/project-images/sixth/2-min.jpg`,
    `../../assets/project-images/sixth/3-min.jpg`,
    `../../assets/project-images/sixth/4-min.jpg`,
    `../../assets/project-images/sixth/5-min.jpg`,
    `../../assets/project-images/sixth/6-min.jpg`
  ];
  private plantImages = [
    `../../assets/plant/2-min-min.jpg`,
    `../../assets/plant/3-min-min.jpg`,
    `../../assets/plant/4-min-min.jpg`,
    `../../assets/plant/5-min-min.jpg`,
    `../../assets/plant/6-min-min.jpg`,
    `../../assets/plant/7-min-min.jpg`,
    `../../assets/plant/8-min-min.jpg`,
    `../../assets/plant/9-min-min.jpg`,
    `../../assets/plant/11-min-min.jpg`,
    `../../assets/plant/13-min-min.jpg`,
    `../../assets/plant/14-min-min.jpg`,
    `../../assets/plant/15-min-min.jpg`,
    `../../assets/plant/16-min-min.jpg`,
    `../../assets/plant/17-min-min.jpg`,
    `../../assets/plant/18-min-min.jpg`,
    `../../assets/plant/19-min-min.jpg`,
    `../../assets/plant/20-min-min.jpg`,
  ];

  private bushesList = [
    {
      type: 'Drzewa i krzewy iglaste',
      description: 'Większość roślin iglastych to gatunki zimozielone, ale można znaleźć gatunki gubiące igły na zimę. Różnorodność kształtów i kolorów jest ogromna. Iglaki są nieocenionym elementem ożywiającym krajobraz zimowy.'
    },
    {
      type: 'Drzewa i krzewy liściaste',
      description: 'Od zawsze zajmowały szczególne miejsce w otoczeniu ludzi. Tworzą urozmaiconą grupę. Są to rośliny o różnych formach pokrojowych, o barwnych i wymyślnych liściach, dekoracyjnych kwiatach i owocach. Zastosowanie ich to wprowadzenie życia do ogrodu, pozbycie się nudy i monotonii.'
    },
    {
      type: 'Drzewa i krzewy owocowe',
      description: 'Dostarczają smacznych owoców, które można wykorzystać na różne sposoby. Zbiory z własnych drzewek i krzewów smakują lepiej i sprawiają dużo radości. Większość drzewek zaszczepione są na podkładkach karłowych, które można wysadzać nawet w najmniejszych ogrodach.'
    },
    {
      type: 'Pnącza',
      description: 'To rośliny szczególne wytwarzające dużą masę zieleni lub kwiatów. Potrafią zdynamizować każdą przestrzeń, zapełniają trzeci wymiar tworząc kolorowe, pionowe ściany'
    },
    {
      type: 'Byliny',
      description: 'Są zielonymi roślinami wieloletnimi zimującymi w gruncie i wyrastającymi ponownie każdego roku. Różnorodność bylin pozwala zagospodarować każdy zakątek w ogrodzie. Można dobrać byliny dobrze czujące się w słońcu, cieniu, na glebach suchych i podmokłych.'
    },
    {
      type: 'Rośliny jednoroczne',
      description: 'Grupa roślin ozdobnych. Ich rozwój przebiega przez jeden sezon wegetacyjny, co oznacza, że potrzebują one więcej uwagi i naszego zaangażowania, dzięki temu pokażą nam swoje najpiękniejsze oblicze.'
    }
  ];
  constructor() { }
  getListOfImageSources(nameProject: string): Array<string> {
    if (nameProject === 'first') {
      return this.first;
    } else if (nameProject === 'second') {
      return this.second;
    } else if (nameProject === 'third') {
      return this.third;
    } else if (nameProject === 'fourth') {
      return this.fourth;
    } else if (nameProject === 'fifth') {
      return this.fifth;
    } else if (nameProject === 'sixth') {
      return this.sixth;
    } else {
      throwError('can not find project');
    }
  }
  getListOfPlantImages(): Array<string> {
    return this.plantImages;
  }
  getImagePlantFromTheList(index: number): string {
    return this.plantImages[index];
  }

  getListOfBushes(): Array<object> {
    return this.bushesList;
  }
}
