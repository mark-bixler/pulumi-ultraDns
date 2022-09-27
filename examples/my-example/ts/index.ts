import * as pulumi from "@pulumi/pulumi";
import * as ultradns from "@mark-bixler/ultradns";

const devRecord = new ultradns.Record(`dev-dnsRecord`, {
    ownerName: "dev.example.ninja",
    recordType: "CNAME",
    zoneName: "example.ninja.",
    ttl: 3600,
    recordDatas: ["example.us-east-2.elb.amazonaws.com"],
});
