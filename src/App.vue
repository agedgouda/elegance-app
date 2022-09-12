<template>

  <div id="nav">
      <img
        alt="Vue logo"
        class="logo"
        src="/images/elegance-rent-logo.300a5f44.png"
      />
    </div>

    <PropertyList></PropertyList>>
  </template>
  
  <script setup>
  import { useMsal } from '@/composition-api/useMsal';
  import { msalInstance,loginRequest } from "./authConfig";
  import PropertyList from "@/components/PropertyList.vue";
  const { instance } = useMsal();
   
  const accounts = msalInstance.getAllAccounts();
  console.log("here ",accounts)
  console.log(import.meta.env.DEV)
  console.log(import.meta.env.PROD)
  if (accounts.length === 0) {
      instance.loginRedirect();
  }
  </script>