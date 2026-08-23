<script lang="ts" setup>
import { useExpenseForm } from "~/feature/add-expense-form/model/useExpenseForm";
import BaseButton from "~/shared/ui/button/BaseButton.vue";
import BaseInput from "~/shared/ui/input/BaseInput.vue";

const { form, submit, errors } = useExpenseForm();
</script>

<template>
  <form class="space-y-3">
    <BaseInput
      label="Название"
      placeholder="Название"
      v-model="form.title"
      :error="errors.title?.[0]"
    />

    <BaseInput
      label="Сумма"
      placeholder="Сумма"
      v-model.number="form.amount"
      :error="errors.amount?.[0]"
    />
    <BaseInput
      label="Тип"
      placeholder="Тип"
      v-model="form.type"
      :error="errors.type?.[0]"
    />

    <BaseButton variant="secondary" class="mt-4" @click.prevent="submit()">
      Добавить расход
    </BaseButton>
  </form>
</template>
