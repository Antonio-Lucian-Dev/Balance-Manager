/* eslint-disable @typescript-eslint/naming-convention */
export interface Exchange {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    AED: string;
    AFN: string;
    ALL: string;
    AMD: string;
    ANG: string;
    AOA: string;
    ARS: string;
    AUD: string;
    AWG: string;
    AZN: string;
    BAM: string;
    BBD: string;
    BDT: string;
    BGN: string;
    BHD: string;
    BIF: string;
    BMD: string;
    RON: string;
  };
}
