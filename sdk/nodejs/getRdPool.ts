// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Use this data source to get detailed information of Resource Distribution (RD) pool records.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ultradns from "@pulumi/ultradns";
 *
 * const rdpool = pulumi.output(ultradns.getRdPool({
 *     ownerName: "www",
 *     recordType: "A",
 *     zoneName: "example.com.",
 * }));
 * ```
 */
export function getRdPool(args: GetRdPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetRdPoolResult> {
    if (!opts) {
        opts = {}
    }

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
    return pulumi.runtime.invoke("ultradns:index/getRdPool:getRdPool", {
        "ownerName": args.ownerName,
        "recordType": args.recordType,
        "zoneName": args.zoneName,
    }, opts);
}

/**
 * A collection of arguments for invoking getRdPool.
 */
export interface GetRdPoolArgs {
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    ownerName: string;
    /**
     * (String) Must be formatted as the well-known resource record type (A or AAAA) or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number:<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    recordType: string;
    /**
     * (String) Name of the zone.
     */
    zoneName: string;
}

/**
 * A collection of values returned by getRdPool.
 */
export interface GetRdPoolResult {
    /**
     * (Computed) (String) An optional description of the RD pool.
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    /**
     * (Computed) (String) The order of the records will be returned in.
     */
    readonly order: string;
    readonly ownerName: string;
    /**
     * (Computed) (String List) The list of IPv4 or IPv6 addresses.
     */
    readonly recordDatas: string[];
    readonly recordType: string;
    /**
     * (Computed) (Integer) The time to live (in seconds) for the record. Must be a value between 0 and 2147483647, inclusive.
     */
    readonly ttl: number;
    readonly zoneName: string;
}

export function getRdPoolOutput(args: GetRdPoolOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRdPoolResult> {
    return pulumi.output(args).apply(a => getRdPool(a, opts))
}

/**
 * A collection of arguments for invoking getRdPool.
 */
export interface GetRdPoolOutputArgs {
    /**
     * (String) The domain name of the owner of the RRSet. Can be either a fully qualified domain name (FQDN) or a relative domain name. If provided as a FQDN, it must be contained within the zone name's FQDN.
     */
    ownerName: pulumi.Input<string>;
    /**
     * (String) Must be formatted as the well-known resource record type (A or AAAA) or the corresponding number for the type (1 or 28).<br/>
     * Below are the supported resource record types with the corresponding number:<br/>
     * `A (1)`
     * `AAAA (28)`
     */
    recordType: pulumi.Input<string>;
    /**
     * (String) Name of the zone.
     */
    zoneName: pulumi.Input<string>;
}
