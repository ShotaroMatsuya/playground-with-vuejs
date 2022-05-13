<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],// provideから供給されるように変更したため、削除
  inject: ['topics'],
  // emits: ['select-topic'],  // provideから供給されるようにしたため、削除
};
</script>
