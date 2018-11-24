export interface User {
    id?: string;
    uid?: string;
    username?: string;

    member_type?:string;
    line?:string;
    fname?:string;
    lname?:string;
    gender?:string;
    ID_card?:string;
    address?:string;
    tel?:string;
    mobile?:string;
    fax?:string;
    other_email?:string;
    member_ID?           :string;//
    farm_Name?           :string;//
    farm_Logo?           :string;//
    farm_address? :string;
    password?: string;
    email?: string;
    anonymous?: boolean;
    photoURL?: string;  // user.photoURL,
    roles?: Roles;
    registrationDate?: Date;
    downloadUrl?: string;
    area?: string;
  }
  
  export interface Roles {
    authuser?: boolean;  // optionale parameter welche evtl. noch nicht existieren mit ?
    admin?: boolean;
    superadmin?: boolean;
  }
