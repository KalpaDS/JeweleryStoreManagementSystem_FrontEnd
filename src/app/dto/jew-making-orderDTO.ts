import {MetalDTO} from './metalDTO';
import {GemDTO} from './gemDTO';
import {MakersDTO} from './makersDTO';

export class JewMakingOrderDTO {
  jewMDId: number;
  givenDate: Date;
  metal: MetalDTO;
  gem: GemDTO;
  jewelryMaker: MakersDTO;
  givenMetalWeight: number;
}
