import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default function welcomeMail(params){

    let newParams={
        empname: params.empname,
        username: params.username,
        password: params.password,
        to_email: params.to_email
    };

    emailjs.send('service_ufoheny','template_gthofqi',newParams,'user_fvU6SYbToOsc7pAT3U5ZY')
}