<template>
    <div>
       <p>test map here</p>
      <mapir :center="center" :apiKey="apiKey"></mapir>
    </div>
</template>
<script>
import { mapir } from "mapir-vue";
    export default ({
        components: { mapir },
          data() {
    return {
      apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVjNmZjYWQ3NGQ4ZDQxOTQxNThhZjlhYzI0NzViNGExOTY5MzE5M2QzZTc4ZTg2ZjQ0MDY1MDcyNjQ5MzViZGYzNmE2ZjUxNDBlNmEzMWRkIn0.eyJhdWQiOiIxNTIzOCIsImp0aSI6IjVjNmZjYWQ3NGQ4ZDQxOTQxNThhZjlhYzI0NzViNGExOTY5MzE5M2QzZTc4ZTg2ZjQ0MDY1MDcyNjQ5MzViZGYzNmE2ZjUxNDBlNmEzMWRkIiwiaWF0IjoxNjI5NjMzMDMyLCJuYmYiOjE2Mjk2MzMwMzIsImV4cCI6MTYzMjMxNTAzMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.L3xqqxQ2aCi7RjiDshvq-q1UYxwHD7GcSN-QcIWU3kVKtUXHVNVRtLjwDq5jVwWHqBSqEn9JT45HktwD6gawn7TS07vDx_546QeBMT-rfaP0g8_iV162q-_Q17Hqjpn0ap3lDhl4jkMlMwKzSsEJ1yJojggNaOt-Ak_QvV4I9a-1WA_cRtNdwxr53DXLXSbhBGig9QrH2TU8tK1LJCJVSPkHoBRhA-hEMf1mCpfE41bEYG2LMREI1qQvw1w6aojEXdML_FKWlie1CZ5HbIjbxjb4aUveNQspDqwLKkv9hh4G0pK6IsOaONqJ7iscB2S9zvYhK04DtN9uQ6irbSBySQ',
      center: [51.420296, 35.732379]
    };
  }
    })
</script>
