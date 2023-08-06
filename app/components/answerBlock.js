const AnswerBlock = (answer) => {
    return (
        <div className="flex bg-white my-4 flex-col items-center justify-center rounded-lg mx-4 p-4">
            <h1>Answer</h1>
            {/* gicen ip section */}
            {/* ipNetwork: block.base,
      subnetMask: block.mask,
      cidr: block.bitmask,
      wildcardMask: block.hostmask,
      broadcast: block.broadcast,
      size: block.size,
      ipStart: block.first,
      ipLast: block.last */}
            <div className="flex flex-col items-center mt-4 justify-center">
                  <input type="text" id="inputIpNetwork" class="border text-sm rounded-lg p-2.5" placeholder="IP Network"/>
                  <input type="text" id="inputSubnetMask" class="border text-sm rounded-lg p-2.5" placeholder="Subnet Mask"/>
                  <input type="text" id="inputWildcardMask" class="border text-sm rounded-lg p-2.5" placeholder="Wildcard Mask"/>
                  <input type="text" id="inputCidr" class="border text-sm rounded-lg p-2.5" placeholder="CIDR"/>
                  <input type="text" id="inputBroadcast" class="border text-sm rounded-lg p-2.5" placeholder="Broadcast"/>
                  <input type="text" id="inputSubnetMask" class="border text-sm rounded-lg p-2.5" placeholder="Subnet Mask"/>
                  <div className="flex items-center justify-between">
                    <input type="text" id="inputIpNetwork" class="border text-sm rounded-lg p-2.5" placeholder="IP Start"/>
                    -
                    <input type="text" id="inputIpNetwork" class="border text-sm rounded-lg p-2.5" placeholder="IP End"/>
                  </div>
                  <input type="text" id="inputIpNetwork" class="border text-sm rounded-lg p-2.5" placeholder="Gateway"/>
            </div>
        </div>
    )
}

export default AnswerBlock