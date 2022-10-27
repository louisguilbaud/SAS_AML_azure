#!/bin/bash
# Apply ddc_manifest.yaml to create the needed Deployment and Service

kubectl -n viyademo apply -f https://raw.githubusercontent.com/xavierBizoux/ddc-container/master/manifest/ddc_manifest.yaml

# Create a manifest to define the Ingress resource
cat << EOF > /tmp/ddc-ingress.yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ddc-ingress
  namespace: viyademo
spec:
  ingressClassName: nginx
  tls:
    - hosts:
      - viya4.frasep.sas.com
      - '*.viya4.frasep.sas.com'
  rules:
    - host: viya4.frasep.sas.com
      http:
        paths:
          - path: /ddc(/|$)(.*)
            pathType: Prefix
            backend:
              service:
                name: ddc-service
                port:
                  number: 3000
    - host: '*.viya4.frasep.sas.com'
      http:
        paths:
          - path: /ddc(/|$)(.*)
            pathType: Prefix
            backend:
              service:
                name: ddc-service
                port:
                  number: 3000
EOF

# Apply the newly yaml file
kubectl apply -f /tmp/ddc-ingress.yaml -n viyademo

# Print the URL of the web application
printf "URL for DDC ingress: https://viya4.frasep.sas.com/ddc \n"
