#!/bin/bash

API="http://localhost:4741"
URL_PATH="/films"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "film": {
      "title": "'"${TITLE}"'",
      "type": "'"${TYPE}"'",
      "genre": "'"${GENRE}"'",
      "platform": "'"${PLATFORM}"'"
    }
  }'

echo
