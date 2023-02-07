export type Car = {
  _id: number;
  mispar_rechev: string;
  tozeret_cd: string;
  sug_degem: string;
  tozeret_nm: string;
  degem_cd: string;
  degem_nm: string;
  ramat_gimur: string;
  ramat_eivzur_betihuty: string;
  kvutzat_zihum: string;
  shnat_yitzur: string;
  degem_manoa: string;
  mivchan_acharon_dt: string;
  tokef_dt: string;
  baalut: string;
  misgeret: string;
  tzeva_cd: string;
  tzeva_rechev: string;
  zmig_kidmi: string;
  zmig_ahori: string;
  sug_delek_nm: string;
  horaat_rishum: string;
  moed_aliya_lakvish: string;
  kinuy_mishari: string;
  rank: number;
};
export type CarTechnicalInfo = {
  _id: number;
  nefah_manoa: string;
  mishkal_kolel: string;
  mazgan_ind: string;
  abs_ind: string;
  mispar_kariot_avir: string;
  hege_koah_ind: string;
  automatic_ind: string;
  mispar_halonot_hashmal: string;
  halon_bagg_ind: string;
  galgaley_sagsoget_kala_ind: string;
  argaz_ind: string;
  mispar_dlatot: string;
  koah_sus: string;
  mispar_moshavim: string;
  bakarat_yatzivut_ind: string;
  bakarat_stiya_menativ_ind: string;
  nitur_merhak_milfanim_ind: string;
  zihuy_beshetah_nistar_ind: string;
  bakarat_shyut_adaptivit_ind: string;
  zihuy_holchey_regel_ind: string;
  matzlemat_reverse_ind: string;
  hayshaney_lahatz_avir_batzmigim_ind: string;
  ramat_eivzur_betihuty: string;
  shlita_automatit_beorot_gvohim_ind: string;
  zihuy_tamrurey_tnua_ind: string;
  bakarat_stiya_activ_s: string;
  bakarat_mehirut_isa: string;
};

export interface Res {
  result: {
    records: Car[];
    // data: CarTechnicalInfo[];
  };
}
export interface Response {
  result: {
    records: CarTechnicalInfo[];
  };
}
