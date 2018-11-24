export interface Order {
    id: string;
    blood_type:string;
    status_payment:string;

    membernameTH        :string;//
    membernameEN        :string;//
    member_address      :string;//
    member_tel          :string;//
    member_ID           :string;//
    farm_Name           :string;//
    farm_Logo           :string;//


    breed               :string;
    cattle_Id           :string; 
    cattle_Name         :string; 
    date_of_birth       :string;
    sex                 :string;
    color               :string;
    breeding            :string;
    birth_weight        :string;
    birth_chert         :string;
    date_of_wean        :string;
    wean_weight         :string;
    wean_chert          :string;
    hip_height          :string;
    fa_Name             :string;
    fa_Id               :string;
    ma_Name             :string;
    ma_Id               :string;
    breeder             :string;
    owner_name          :string; 
    status              :string; //
    shippingaddress          :string;
    date_of_delivery    :any;
}